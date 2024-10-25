/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BlogService } from "../../services/blogService";
import { BlogHeader } from "./BlogHeader";
import { BlogCard } from "./BlogCard";

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await BlogService.getStaticProps();
      setPosts(data.props.post);
      console.log(data.props.post);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <BlogHeader></BlogHeader>
      <div className="container mx-auto p-4">
        <BlogCard posts={posts}></BlogCard>
      </div>
    </>
  );
};

export { Blog };
