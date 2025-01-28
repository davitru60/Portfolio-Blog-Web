import { Link } from "react-router-dom";
import { Project, ProjectCardProps } from "../../interfaces/project";

const ProjectCard = (projectCardProps: ProjectCardProps) => {
  const { projects } = projectCardProps;
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-24">
      {projects.map((project: Project, index: number) => (
        <Link
          to={`/projects/${project.fields.slug}`}
          key={index}
          className="mx-5 flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-black dark:blog-card-dark"
        >
          {project.fields.featuredImage && (
            <div className="w-full">
              <img
                src={project.fields.featuredImage.fields.file.url}
                alt={project.fields.title}
                className="mb-4 h-auto max-h-48 w-full object-cover"
              />
            </div>
          )}

          <div className="flex-grow p-4 pt-0">

            <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-700 dark:text-white">
              {project.fields.title}
            </h2>

            <div className="mb-4 text-sm text-gray-700 dark:text-white">
              {project.fields.summary}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { ProjectCard };
