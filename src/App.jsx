import { useEffect, useState } from 'react'

export default function App() {

  // Usando buenas prácticas para el fetching de datos en React, ingresa a la siguiente API https://www.themealdb.com/api.php . Elige una categoría de comidas a tu criterio y asigna las primeras 5 comidas de la categoría que elegiste a un state.

  const [arregloComidas, setArregloComidas] = useState([]);

  const fetchingComidas = async () => {
    try {
      const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta';

      const response = await fetch(url);
      const comidas = await response.json();

      const comidasSliced = comidas.meals.slice(0, 5);

      setArregloComidas(comidasSliced);

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchingComidas();
  }, [])

  return (
    <>
      <div className='max-w-[1200px] mx-auto '>
        <h1 className='mb-10 text-[40px] text-center font-bold '>Prueba técnica para Desarrollador Frontend</h1>

        {/* Muestra en pantalla una card como en el sitio de ejemplo con cada comida que almacenaste en tu arreglo, asegúrate que sea responsivo */}

        <ul className='grid-autofit'>
          {arregloComidas.map(({strMeal, idMeal, strMealThumb}) => (
            <li
              key={idMeal}
              className='relative pt-8 pb-6 border border-gray-200 rounded flex items-center flex-col justify-center transition-[box-shadow] duration-300 hover:shadow-2xl '
            >
              <img
                src={strMealThumb}
                alt={strMeal}
                className='w-[200px] rounded-md h-auto hover:scale-[105%] transition-[transform] duration-300 '
              />

              <p className='py-4 font-bold text-[20px] max-w-[200px] text-center '>{strMeal} </p>

              <button className='absolute bottom-[-20px] bg-[#e1a141] hover:bg-[#d19131] transition-colors text-white w-[120px] py-2 rounded-full text-[18px] '>Agregar</button>

            </li>
          ))}
        </ul>
      </div>

      <section
        className={"mt-20 flex flex-col h-[600px] md:h-[800px] lg:flex-row lg:h-[580px] 2xl:h-[680px] mb-[50px] relative"}
      >
        <div className="w-full h-full lg:h-full lg:w-[50%] lg:rounded-r-3xl overflow-hidden z-10 relative max-h-[600px]">
          <img
            src="src/img/banner-distribuye.avif"
            alt="imagen banner"
            className='object-cover absolute h-full w-full'
          />
        </div>

        <div className="flex flex-col justify-between lg:justify-center xl:gap-4 items-center w-full h-fit lg:h-full lg:w-[52%] mt-0 text-center bg-[#F6F6F6] py-[40px] px-[20px] lg:pl-[5%] xl:pl-[3.3%] 2xl:pl-[3.05%] z-0 lg:absolute lg:right-0 lg:max-h-[600px]">
          <h2
            className={"leading-7 md:leading-[36px] lg:leading-8 xl:leading-10 ph3:w-[98%] text-xl sm:text-2xl md:text-[26px] px-4 lg:px-0 2xl:px-4 lg:text-[28px] xl:text-[36px] font-bold md:font-extrabold lg:w-[420px] xl:w-[580px] text-left mb-4 xl:mb-0"}
          >
            B Life®️ es un compromiso con el bienestar integral.
          </h2>

          <ul className="text-sm ph3:text-base lg:text-[16px] leading-normal ph3:leading-[20px] lg:mt-4 lg:max-w-none lg:mx-auto lg:w-[420px] text-left xl:w-[560px] flex flex-col gap-2 px-5 lg:px-0">
            <p>
              Como mayorista, te ofrecemos la oportunidad de formar parte de
              nuestra familia. Descubre una gama de productos diseñados con
              cuidado y conocimiento, extraídos de lo mejor de la naturaleza.{" "}
            </p>
            <p className="sm:text-xl lg:text-lg text-left font-bold mt-4 lg:mt-8 w-full">
              Únete y transforma tu visión de negocio con nosotros.
            </p>
          </ul>

          <div className="flex justify-start px-5 lg:px-0 mt-[16px] rounded-[20px] lg:w-[420px] xl:w-[580px] w-full">
            <button
              className="bg-[#E6A553] hover:bg-[#D68F37] transition text-white px-16 py-2 rounded-[10px] 2xl:mt-4 text-sm md:text-base"
            >
              Regístrate aquí
            </button>
          </div>
        </div>
      </section>
    </>

  )
}
