/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectService } from "../../services/projectService";
import { ProjectCard } from "./ProjectCard";
import { Spinner } from "../../components/Spinner/Spinner";



const ProjectPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const data = await ProjectService.getProjects();
      setProjects(data.props.projects);
      setIsLoading(false); 
    };
    fetchProjects();
  }, []);

  return (
    <>
      <ProjectHeader />

      <div className="mx-auto p-4">
        {isLoading ? (
          <Spinner />  
        ) : (
          <ProjectCard projects={projects} />
        )}
      </div>
    </>
  );
};

export { ProjectPage };
