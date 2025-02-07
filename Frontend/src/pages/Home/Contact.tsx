import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-section" className="mx-auto max-w-lg p-8 text-center dark:bg-black dark:text-white">
      <h1 className="bg-gradient-text-1 z-10 mb-6 mt-6 text-center text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl lg:text-5xl">
        Contacto
      </h1>

      <a
        href="mailto:davitru60@gmail.com"
        className="mb-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <FaEnvelope className="mr-2" />
        Enviar un correo
      </a>

      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/david-trujillo-carrero/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com/davitru60"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 transition-colors duration-300 hover:text-black dark:text-gray-400 dark:hover:text-gray-200"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export { Contact };
