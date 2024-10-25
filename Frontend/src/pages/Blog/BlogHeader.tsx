const BlogHeader = () => {
  return (
    <div className="w-full mx-auto flex md:px-24 md:py-16 md:flex-row flex-col items-center">
      <div className="w-full flex-grow mt-5 md:mt-0 flex flex-col items-center text-center">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-7xl md:leading-normal dark:text-white">
          Artículos
        </h1>
        <h2 className="text-xl font-semibold leading-7 text-gray-600 md:text-2xl dark:text-gray-400">
          Explora mis pensamientos y experiencias
        </h2>

        <div className="mt-5 flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-md p-2 w-full max-w-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export { BlogHeader };
