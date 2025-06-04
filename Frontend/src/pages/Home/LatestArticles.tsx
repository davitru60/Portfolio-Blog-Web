import { useEffect, useState } from 'react';
import { HashnodePostNode } from '../../interfaces/post';
import { HashnodeBlogService } from '../../services/hashnode/hashnodeBlogService';
import { HashnodeBlogCard } from '../Blog/BlogHashnode/HashnodeCard';

const LatestArticles = () => {
  const [posts, setPosts] = useState<HashnodePostNode[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await HashnodeBlogService.getLatestThreePosts()
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
        <HashnodeBlogCard posts={posts} />
      </div>
    </>
  );
};

export { LatestArticles };
