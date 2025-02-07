/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectService } from "../../services/projectService";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import { Project } from "../../interfaces/project";

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
    <div className="mx-auto px-2 pt-14 py-10 md:py-20">
      <div className="mx-auto my-4 max-w-4xl p-4">
        <h1 className="mb-6 text-3xl font-bold">{project?.fields.title}</h1>

        {/* Imagen destacada */}
        <img
          className="mx-auto mb-4 h-auto max-h-96 w-96 sm:w-2/3 rounded-lg object-cover"
          src={project?.fields.featuredImage.fields.file.url}
          alt={project?.fields.title || "Imagen destacada"}
        />

        <MarkdownContent content={project?.fields.content} />

        {/* Galería de imágenes */}
        <h2 className="mb-4 mt-6 text-2xl font-bold">Imágenes del proyecto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project?.fields.gallery.map((img: any, index: number) => (
            <img
              key={index}
              className="h-60 w-full rounded-lg object-cover"
              src={img.fields.file.url}
              alt={img.fields.title || `Imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectContent };
