import { Button } from "../../components/Button/Button";
import { Link } from "react-scroll"; // Importa Link de react-scroll
import backgroundImage from "../../assets/header.webp";

const HomeHero = () => {
  return (
    <div
      id="home-hero"
      className="mx-auto flex h-full w-full flex-col items-center px-4 py-10 pt-14 text-center md:py-32"
    >
      <div className="relative flex max-w-xl flex-col items-center p-8">
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center opacity-25 blur-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 50,
            pointerEvents: "none",
          }}
        ></div>

        <h2 className="z-10 text-2xl font-semibold leading-7 text-gray-600 dark:text-gray-300 md:text-3xl lg:text-4xl">
          Hola, soy David
        </h2>
        <h1 className="bg-gradient-text-1 z-10 mb-3 text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl md:text-6xl lg:text-8xl">
          Desarrollador web
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-300 md:text-lg lg:text-2xl">
          Como desarrollador web, me dedico a convertir las ideas en
          aplicaciones web innovadoras.
        </p>

        <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:space-x-4">
          <Link
            to="contact-section" // Aquí va el id de la sección de contacto
            smooth={true}
            duration={500}
            className="contact"
          >
            <Button content="Contáctame" className={"contact"} />
          </Link>
          <Button
            className="readArticles"
            content="Leer artículos"
            url="/blog"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export { HomeHero };
