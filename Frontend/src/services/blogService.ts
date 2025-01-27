import { Post } from "../interfaces/post";
import { contenfulClient } from "./contenfulClient";

class BlogService {
  static getBlogPosts = async (limit = 10, skip = 0) => {
    const client = contenfulClient;
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit: limit,
      skip,
    });
    const blogPosts = entries.items as unknown as Post[];
    return blogPosts
  };

  static getLatestThreePosts = async () => {
    const client = contenfulClient;
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit: 3,
    });
    const blogPosts = entries.items as unknown as Post[];
    return blogPosts
  };

  static getCategories = async () => {
    const client = contenfulClient;
    const entries = await client.getEntries({ content_type: "category" });
    return {
      props: {
        category: entries.items,
      },
    };
  };
}

export { BlogService };
