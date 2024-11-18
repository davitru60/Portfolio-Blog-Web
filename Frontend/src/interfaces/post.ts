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
  posts: Post[],
}
