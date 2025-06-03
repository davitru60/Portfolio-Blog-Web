/* eslint-disable @typescript-eslint/no-explicit-any */
interface Author {
  metadata: Record<string, any>,
  sys: Record<string, any>,
  fields: Record<string, any>,
}

interface FeaturedImage {
  metadata: Record<string, any>,
  sys: Record<string, any>,
  fields: Record<string, any>,
}

export interface Tag {
  metadata: Record<string, any>,
  sys: Record<string, any>,
  fields: {
    name: string,
  },
}

export interface Post {
  fields: {
    author: Author,
    content: string,
    featuredImage: FeaturedImage,
    publishDate: string,
    slug: string,
    summary: string,
    tags: Tag[],
    title: string,
  },
  sys: {
    createdAt: string,
    updatedAt: string,
  },
}

export interface BlogCardProps {
  setSelectedPostSlug?:any
  posts: Post[],
}

//Hashnode
export interface HashnodePost {
  author:{
    name: string;
  }
  title: string;
  publishedAt: string;
  slug: string;
  brief: string;
  coverImage: {
    url: string;
  }
  dateAdded: string;
  dateUpdated: string;
  content: {
    markdown: string;
  };
}

export interface HashnodeBlogCardProps {
  posts: HashnodePost[],
  setSelectedPostSlug?: any
}