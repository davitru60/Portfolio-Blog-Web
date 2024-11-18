/* eslint-disable @typescript-eslint/no-explicit-any */
interface FeaturedImage {
  metadata: Record<string, any>;
  sys: Record<string, any>;
  fields: Record<string, any>;
}

interface Gallery {
  metadata: Record<string, any>;
  sys: Record<string, any>;
  fields: Record<string, any>;
}

interface FeaturedImage {
  metadata: Record<string, any>;
  sys: Record<string, any>;
  fields: Record<string, any>;
}

export interface Project {
  fields: {
    title: string;
    content: string;
    featuredImage: FeaturedImage;
    slug: string;
    summary: string;
    gallery: Gallery[];
  };
  sys: {
    createdAt: string;
    updatedAt: string;
  };
}

export interface ProjectCardProps {
  projects: Project[],
}
