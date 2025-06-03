// src/components/BlogList.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HashnodeBlogService } from "../../../services/hashnode/hashnodeBlogService";

const BlogList = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await HashnodeBlogService.getBlogPosts();
        setPosts(fetchedPosts);
        console.log("Posts cargados:", fetchedPosts);
      } catch (error) {
        console.error("Error al cargar posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (



    
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog ({posts.length})</h1>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl text-black font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.brief}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export {BlogList}