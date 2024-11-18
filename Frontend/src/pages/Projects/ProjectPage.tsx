/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectService } from "../../services/projectService";
import { ProjectCard } from "./ProjectCard";

const ProjectPage = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await ProjectService.getProjects();
      console.log(data.props.projects);
      setProjects(data.props.projects);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <ProjectHeader></ProjectHeader>

      <div className="mx-auto p-4">
        <ProjectCard projects={projects} />
      </div>
    </>
  );
};

export { ProjectPage };
