import {
  FaAngular,
  FaBootstrap,
  FaBullhorn,
  FaClock,
  FaDatabase,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import { SkillCard } from "../../components/Card/SkillCard";
import { SiFigma, SiMysql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="mx-auto w-10/12 px-6 py-6 md:px-24">
      <h1 className="bg-gradient-text-1 z-10 mb-3 text-center text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl md:text-6xl lg:text-6xl">
        Habilidades
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <SkillCard
          title="Diseño / frontend"
          skills={[
            {
              icon: (
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFigma className="text-3xl text-purple-500" title="Figma" />
                </a>
              ),
              name: "Figma",
            },
            {
              icon: (
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTailwindcss
                    className="text-3xl text-teal-400"
                    title="Tailwind CSS"
                  />
                </a>
              ),
              name: "Tailwind CSS",
            },
            {
              icon: (
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBootstrap
                    className="text-3xl text-indigo-500"
                    title="Bootstrap"
                  />
                </a>
              ),
              name: "Bootstrap",
            },
            {
              icon: (
                <a
                  href="https://angular.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAngular
                    className="text-3xl text-red-600"
                    title="Angular"
                  />
                </a>
              ),
              name: "Angular",
            },
            {
              icon: (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaReact className="text-3xl text-blue-500" title="React" />
                </a>
              ),
              name: "React",
            },
          ]}
          containerClassName="flex flex-col items-center justify-center h-60 p-6 container-card-light  dark:container-card-dark"
          titleClassName="text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center"
          skillsContainerClassName="grid grid-cols-2 gap-4 mt-4"
          skillItemClassName="flex items-center space-x-3 text-black  dark:text-gray-200 text-md font-semibold"
        />

        <SkillCard
          title="Backend"
          skills={[
            {
              icon: (
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaNodeJs
                    className="text-3xl text-green-400"
                    title="Node.js"
                  />
                </a>
              ),
              name: "Node.js",
            },
            {
              icon: (
                <a
                  href="https://laravel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLaravel
                    className="text-3xl text-red-500"
                    title="Laravel"
                  />
                </a>
              ),
              name: "Laravel",
            },
          ]}
          containerClassName="flex flex-col items-center justify-center h-60 w-full rounded-3xl bg-black shadow-lg p-6"
          titleClassName="text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center"
          skillItemClassName="flex items-center space-x-3 text-gray-200 text-md font-semibold"
        />

        <SkillCard
          title="Bases de datos"
          skills={[
            {
              icon: (
                <a
                  href="https://es.wikipedia.org/wiki/SQL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDatabase
                    className="text-3xl text-yellow-600"
                    title="SQL"
                  />
                </a>
              ),
              name: "SQL",
            },
            {
              icon: (
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiMysql className="text-3xl text-blue-500" title="MySQL" />
                </a>
              ),
              name: "MySQL",
            },
          ]}
          containerClassName="flex flex-col items-center justify-center h-60 w-full rounded-3xl bg-black shadow-lg p-6"
          titleClassName="text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center"
          skillItemClassName="flex items-center space-x-3 text-gray-200 text-md font-semibold"
        />

        <SkillCard
          title="Soft skills"
          skills={[
            {
              icon: (
                <a
                  href="https://en.wikipedia.org/wiki/Teamwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaUsers
                    className="text-3xl text-blue-500"
                    title="Trabajo en equipo"
                  />
                </a>
              ),
              name: "Trabajo en equipo",
            },
            {
              icon: (
                <a
                  href="https://en.wikipedia.org/wiki/Communication"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBullhorn
                    className="text-3xl text-yellow-500"
                    title="Comunicación"
                  />
                </a>
              ),
              name: "Comunicación",
            },
            {
              icon: (
                <a
                  href="https://en.wikipedia.org/wiki/Time_management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaClock
                    className="text-3xl text-teal-500"
                    title="Gestión del tiempo"
                  />
                </a>
              ),
              name: "Gestión del tiempo",
            },
            {
              icon: (
                <a
                  href="https://en.wikipedia.org/wiki/Adaptability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTasks
                    className="text-3xl text-orange-500"
                    title="Adaptabilidad"
                  />
                </a>
              ),
              name: "Adaptabilidad",
            },
          ]}
          containerClassName="flex flex-col items-center justify-center h-60 w-full rounded-3xl bg-black shadow-lg p-6"
          titleClassName="text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center"
          skillsContainerClassName="grid grid-cols-2 gap-6 mt-4"
          skillItemClassName="flex items-center space-x-3 text-gray-200 text-md font-semibold"
        />
      </div>
    </div>
  );
};

export { Skills };
