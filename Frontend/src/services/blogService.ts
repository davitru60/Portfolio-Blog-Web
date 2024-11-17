/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateFormatter } from '../helpers/dateFormatter';
import { DateProps } from '../interfaces/date';
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

  static getLastPost = async () => {
    const dateProps: DateProps = {
      locale: 'es-ES',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    };

    const client = contenfulClient;
    const entries = await client.getEntries({ content_type: 'blogPost' });
    const blogPosts = entries.items as unknown as Post[];

    const entriesDates = blogPosts.map((entry: Post) => {
      const dateCreatedAt = entry.sys.createdAt;
      const formattedDate = dateFormatter(dateCreatedAt, dateProps);
      return {
        ...entry,
        sys: {
          ...entry.sys,
          formattedCreatedAt: formattedDate,
        },
      };
    });

    console.log(entriesDates);
  };
}

export { BlogService };
