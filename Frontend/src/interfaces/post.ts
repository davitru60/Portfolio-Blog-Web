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
export interface HashnodeAuthor {
  name: string;
  profilePicture: string | null;
}

export interface HashnodeCoverImage {
  url: string | null;
}

export interface HashnodeTag {
  name: string;
  slug: string;
}

export interface HashnodeSeries {
  name: string;
  slug: string;
}

export interface HashnodeContent {
  html: string;
  markdown?: string; // puede faltar en algunos contextos
}

export interface HashnodeSeo {
  description: string | null;
}

export interface TableOfContentsItem {
  id: string;
  level: number;
  slug: string;
  title: string;
  parentId?: string | null;
}

export interface Features {
  tableOfContents: {
    items: TableOfContentsItem[];
  };
}

export interface HashnodePostNode {
  id: string;
  author: HashnodeAuthor;
  title: string;
  subtitle?: string | null;
  brief?: string | null;
  slug: string;
  canonicalUrl?: string | null;
  coverImage: HashnodeCoverImage | null;
  tags: HashnodeTag[];
  series?: HashnodeSeries[] | null;
  publishedAt: string;
  updatedAt: string;
  readTimeInMinutes: number;
  content: HashnodeContent;
  seo?: HashnodeSeo | null;
  features?: Features | null;
}

export interface HashnodePostEdge {
  node: HashnodePostNode;
}

export interface HashnodePageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface HashnodePosts {
  pageInfo: HashnodePageInfo;
  edges: HashnodePostEdge[];
}

export interface HashnodePublication {
  id: string;
  title: string;
  posts: HashnodePosts;
}

export interface HashnodeAllPostsResponse {
  publication: HashnodePublication;
}

// Para getPostBySlug simplificamos usando HashnodePostNode ya que es la estructura base
export interface PostData {
  publication: {
    id: string;
    post: HashnodePostNode;
  };
}
