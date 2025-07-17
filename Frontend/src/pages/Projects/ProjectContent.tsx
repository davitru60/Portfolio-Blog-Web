/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectService } from "../../services/contentful/projectService";
import { MarkdownContent } from "../../shared/components/ui/MarkdownContent/MarkdownContent";
import { Project } from "../../interfaces/project";
import { Button } from "../../shared/components/ui/Button/Button";


const ProjectContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>();

  useEffect(() => {
    const fetchProject = async () => {
      const data = await ProjectService.getProjects();
      const foundPost = data.props.projects.find(
        (p: Project) => p.fields.slug === slug,
      );
      setProject(foundPost);
    };

    fetchProject();
  }, [slug]);

  return (
    <div className="mx-auto px-2 py-10 pt-14 md:py-20">
      <div className="mx-auto my-4 max-w-4xl p-4">
        <h1 className="mb-6 text-3xl font-bold">{project?.fields.title}</h1>

        {/* Botón de enlace al proyecto */}
        {project?.fields.projectUrl && (
          <div className="mb-6">
            <Button
              content="Ver proyecto"
              className="projectLink"
              url={project.fields.projectUrl}
            />
          </div>
        )}

       
        <MarkdownContent content={project?.fields.content} />

        {/* Galería de imágenes */}
        {project?.fields.gallery && project.fields.gallery.length > 0 && (
          <>
            <h2 className="mb-4 mt-6 text-2xl font-bold">
              Imágenes del proyecto
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.fields.gallery.map((img: any, index: number) => (
                <img
                  key={index}
                  className="h-60 w-full rounded-lg object-cover"
                  src={img.fields.file.url}
                  alt={img.fields.title || `Imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { ProjectContent };
