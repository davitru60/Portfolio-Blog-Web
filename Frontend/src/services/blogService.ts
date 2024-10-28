import { createClient } from "contentful";

class BlogService {
  static getBlogPosts = async () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
    });
    const entries = await client.getEntries({ content_type: 'blogPost' });
    console.log(entries)
    return {
      props: {
        post: entries.items,
      },
    };
  };

  static getCategories = async () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
    });
    const entries = await client.getEntries({ content_type: 'category' });
    return {
      props: {
        category: entries.items,
      },
    };
  };
  

}

export { BlogService };
