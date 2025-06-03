/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BlogService } from '../../services/contentful/blogService';
import { HomeArticleCard } from './HomeArticleCard';

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
      <div className="px-6 md:px-24">
        <h1 className="bg-gradient-text-1 z-10 mt-6 mb-6 text-center text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl lg:text-5xl">
          Últimos artículos
        </h1>
      </div>
      <div className="mx-auto p-4">
        <HomeArticleCard posts={posts} />
      </div>
    </>
  );
};

export { LatestArticles };
