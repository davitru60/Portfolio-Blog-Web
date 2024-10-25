interface Author {
  fields: {
    name: string;
  };
}

interface FeaturedImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Tag {
  fields: {
    name: string;
  };
}

export interface Post {
  fields: {
    title: string;
    content: string;
    slug: string;
    publishDate: string;
    summary: string;
    featuredImage: FeaturedImage;
    author: Author;
    tags: Tag[];
  };
}

export interface BlogCardProps {
  posts: Post[];
}
