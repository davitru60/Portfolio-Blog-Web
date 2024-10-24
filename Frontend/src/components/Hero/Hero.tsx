
const Hero = () => {
  return (
    <div className="w-full mx-auto flex md:px-24 md:py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className="text-xl font-semibold leading-7 text-gray-600 md:text-2xl dark:text-gray-400">
          Hola, soy David
        </h2>
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-7xl md:leading-normal dark:text-white">
          Desarrollador web
        </h1>
        <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed md:text-lg dark:text-gray-300">
          Soy desarrollador web
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg"
          >
            Contáctame
          </a>
          <a
            href="#"
            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg dark:bg-gray-800 dark:text-white"
          >
            Leer artículos
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 flex justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-emerald-600 rounded-full flex items-center justify-center">
            <img
              className="object-cover object-center rounded-full w-full h-full"
              alt="hero"
              src="https://media.istockphoto.com/id/874879344/es/foto/est%C3%A1-lleno-de-confianza-en-s%C3%AD-mismo.jpg?s=2048x2048&w=is&k=20&c=qnF8jN7dLPTOxizRsg1OMF9SAvw8ohPVpR7_0fP2fbk="
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
