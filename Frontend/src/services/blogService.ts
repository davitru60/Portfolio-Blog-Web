import { Post } from '../interfaces/post';
import { contenfulClient } from './contenfulClient';

class BlogService {
  static getBlogPosts = async () => {
    const client = contenfulClient;
    const entries = await client.getEntries({ content_type: 'blogPost' });
    const blogPosts = entries.items as unknown as Post[];
    return {
      props: {
        post: blogPosts,
      },
    };
  };

  static getCategories = async () => {
    const client = contenfulClient;
    const entries = await client.getEntries({ content_type: 'category' });
    return {
      props: {
        category: entries.items,
      },
    };
  };

}

export { BlogService };
