import { Button } from "../../components/Button/Button";

const HomeHero = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center text-center px-4 py-24">
      <div className="max-w-3xl flex flex-col items-center">
        <h2 className="text-xl font-semibold leading-7 text-gray-600 md:text-3xl lg:text-4xl dark:text-gray-300">
          Hola, soy David
        </h2>
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text sm:text-4xl md:text-6xl lg:text-8xl dark:from-blue-400 dark:to-purple-500">
          Desarrollador web
        </h1>
        <p className="mb-8 leading-relaxed md:text-lg lg:text-2xl dark:text-gray-300">
          Como desarrollador web, me dedico a convertir las ideas en aplicaciones web innovadoras.
        </p>
        <div className="flex space-x-4">
          <Button className="contact" content="Contáctame"></Button>
          <Button className="readArticles" content="Leer artículos" url="/blog"></Button>
        </div>
      </div>
    </div>
  );
};

export { HomeHero };
