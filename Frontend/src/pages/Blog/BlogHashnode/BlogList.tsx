import { useEffect, useState } from "react";
import { HashnodeBlogService } from "../../../services/hashnode/hashnodeBlogService";
import { HashnodeBlogCard } from "./HashnodeCard";
import { HashNodeHeader } from "./HashnodeHeader";
import { HashnodePost } from "../../../interfaces/post";

const BlogList = () => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);

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
    <>
    <HashNodeHeader></HashNodeHeader>
    
    <div className="mx-auto p-4">
      <HashnodeBlogCard posts={posts}></HashnodeBlogCard>
    </div>
    
    </>

    
  );
}

export {BlogList}