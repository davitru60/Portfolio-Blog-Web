import { createClient } from "contentful";

class BlogService {
  static getStaticProps = async () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
    });
    const entries = await client.getEntries({ content_type: 'blogPost' });
    return {
      props: {
        post: entries.items,
      },
    };
  };

}

export { BlogService };
