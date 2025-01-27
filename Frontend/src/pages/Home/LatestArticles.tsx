/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BlogService } from '../../services/blogService';
import { BlogCard } from '../Blog/BlogCard';

const LatestArticles = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await BlogService.getLatestThreePosts()
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="px-6 md:px-24 border">
        <h1 className="bg-gradient-text-1 z-10 mt-4 mb-4 text-center text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl lg:text-5xl">
          Últimos artículos
        </h1>
      </div>
      <div className="mx-auto p-4 border">
        <BlogCard posts={posts} />
      </div>
    </>
  );
};

export { LatestArticles };
