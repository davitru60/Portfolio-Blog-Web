/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BlogService } from '../../services/blogService';
import { BlogCard } from '../Blog/BlogCard';

const LatestArticles = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await BlogService.getBlogPosts();
      const latestThreePosts = data.props.post.slice(0, 3);
      setPosts(latestThreePosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="px-6 py-14 md:px-24">
        <h1 className="bg-gradient-text-1 z-10 mb-3 text-center text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl md:text-6xl lg:text-6xl">
          Artículos
        </h1>

        <h2 className="text-center text-xl font-semibold leading-7 text-gray-600 dark:text-gray-400 md:text-2xl">
          Últimos artículos
        </h2>
      </div>
      <div className="mx-auto p-4">
        <BlogCard posts={posts} />
      </div>
    </>
  );
};

export { LatestArticles };
