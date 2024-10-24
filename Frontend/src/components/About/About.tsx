const About = () => {
  return (
    <div className="py-6 px-6 md:px-24">
      <h1 className="text-start py-4 md:py-8 text-3xl font-bold">Sobre mí</h1>

      <section className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="David desarrollador"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>

        <div className="md:col-span-1">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Soy David, un desarrollador web apasionado por crear experiencias
            digitales únicas. Mi objetivo es ayudar a los negocios y a las
            personas a mejorar su presencia en línea.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Con varios proyectos realizados, me especializo en frontend y
            desarrollo web con tecnologías modernas como React, Next.js y
            Tailwind. También me enfoco en mejorar el rendimiento y la
            accesibilidad de los sitios web.
          </p>
        </div>
      </section>
    </div>
  );
};

export { About };
