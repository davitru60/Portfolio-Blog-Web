/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ProjectService } from "../../services/projectService";
import { ProjectCard } from "../Projects/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await ProjectService.getProjects();
      setProjects(data.props.projects);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="px-6 md:px-24 border">
        <h1 className="bg-gradient-text-1 mt-4 mb-4 text-center text-4xl font-extrabold leading-9 tracking-tight py-2 sm:text-4xl lg:text-5xl">
          Últimos proyectos
        </h1>
      </div>
      <div className="mx-auto p-4 border">
        <ProjectCard projects={projects} />
      </div>
    </>
  );
};

export { Projects };
