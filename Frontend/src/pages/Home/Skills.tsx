import { FaBootstrap, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { SkillCard } from "../../components/Card/SkillCard";
import { SiTailwindcss } from "react-icons/si";
import { AngularIcon } from "../../components/Icons/AngularIcon";
import { FigmaIcon } from "../../components/Icons/FigmaIcon";

const Skills = () => {
  return (
    <>
      <div className="px-6 md:px-24">
        <h1 className="bg-gradient-text-1 mt-6 mb-6 text-center text-4xl font-extrabold leading-9 tracking-tight py-2 sm:text-4xl lg:text-5xl">
          Habilidades
        </h1>
      </div>
      <div className="mx-auto w-10/12 p-4 md:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                    <FigmaIcon></FigmaIcon>
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
                    href="https://angular.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AngularIcon></AngularIcon>
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
            containerClassName="flex flex-col items-center justify-center p-6 container-card-light dark:container-card-dark"
            titleClassName="text-xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 md:text-2xl lg:text-3xl text-center"
            skillsContainerClassName="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2"
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
            containerClassName="flex flex-col items-center justify-center p-6 container-card-light dark:container-card-dark"
            titleClassName="text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center"
            skillsContainerClassName="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2"
            skillItemClassName="flex items-center space-x-3 text-black  dark:text-gray-200 text-md font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export { Skills };
