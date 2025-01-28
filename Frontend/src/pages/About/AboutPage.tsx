import backgroundImage from "../../assets/header.webp";

const AboutPage = () => {
  return (
    <div className="mx-auto flex h-full w-full flex-col items-center px-4 pt-14 text-center md:py-10">
      <div className="relative flex max-w-3xl flex-col items-center rounded-lg p-8">
        <div
          className="absolute inset-0 rounded-full bg-cover bg-center opacity-25 blur-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            zIndex: 50,
            pointerEvents: "none",
            transform: "scale(0.75)",
            transformOrigin: "bottom",
          }}
        ></div>
        <h1 className="bg-gradient-text-1 mb-3 text-3xl font-extrabold leading-9 tracking-tight sm:leading-10 md:text-7xl md:leading-normal">
          Sobre mí
        </h1>
        <h2 className="text-xl font-semibold leading-7 text-gray-600 dark:text-gray-400 md:text-2xl">
          Explora mis pensamientos y experiencias
        </h2>
      </div>

      <section className="m-5 mt-10 grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
        <div className="flex justify-center md:col-span-1">
          <img
            src={backgroundImage}
            alt="David desarrollador"
            className="h-48 w-48 rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="md:col-span-1">
          <p className="text-start text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Soy David, un desarrollador web apasionado por crear experiencias
            digitales únicas. Mi objetivo es ayudar a las personas a mejorar su
            presencia en línea. He tenido la oportunidad de trabajar en
            proyectos personales y colaborativos, enfocándome en la creación de
            sitios web funcionales y atractivos.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="text-start text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Con varios proyectos realizados, me especializo en frontend y
            desarrollo web con tecnologías modernas.
          </p>
        </div>
      </section>
    </div>
  );
};

export { AboutPage };
