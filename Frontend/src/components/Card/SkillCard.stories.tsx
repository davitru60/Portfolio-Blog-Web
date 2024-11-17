/* eslint-disable @typescript-eslint/no-explicit-any */
// .storybook/SkillCard.stories.tsx

import { SkillCard } from "./SkillCard";
import { FaReact } from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AngularIcon } from "../Icons/AngularIcon";
import "../../index.css";

// Exporta las configuraciones para Storybook
export default {
  title: "components/SkillCard",
  component: SkillCard,
  args: {
    title: "Diseño / Frontend",
    skills: [
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
            <AngularIcon />
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
    ],
    containerClassName:
      "flex flex-col items-center justify-center h-60 p-6 container-card-light dark:container-card-dark",
    titleClassName:
      "text-2xl font-extrabold leading-9 tracking-tight mb-3 bg-gradient-text-1 sm:text-xl md:text-2xl lg:text-3xl z-10 text-center",
    skillsContainerClassName: "grid grid-cols-2 gap-4 mt-4",
    skillItemClassName:
      "flex items-center space-x-3 text-black dark:text-gray-200 text-md font-semibold",
  },
};

const Template = (args: any) => (
  <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
    <SkillCard {...args} />
    <SkillCard {...args} />
  </div>
);

export const Default = Template.bind({});
