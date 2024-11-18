import backgroundImage from "../../assets/header.webp";

const ProjectHeader = () => {
  return (
    <div className="mx-auto flex h-full w-full flex-col items-center px-4 py-10 text-center">
      <div className="relative flex max-w-3xl flex-col items-center rounded-lg p-8">
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center opacity-25 blur-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 50,
            pointerEvents: "none",
            transform: 'scale(0.75)', 
            transformOrigin: 'bottom'
          }}
        ></div>
        <h1 className="bg-gradient-text-1 mb-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10 md:text-7xl md:leading-normal">
          Proyectos
        </h1>
        <h2 className="text-xl font-semibold leading-7 text-gray-600 dark:text-gray-400 md:text-2xl">
          Recopilación de mis proyectos
        </h2>
      </div>

    </div>
  );
};

export { ProjectHeader };
