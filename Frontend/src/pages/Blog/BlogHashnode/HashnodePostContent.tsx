import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashnodePostNode } from "../../../interfaces/post";
import { HashnodeBlogService } from "../../../services/hashnode/hashnodeBlogService";
import { MarkdownContent } from "../../../shared/components/ui/MarkdownContent/MarkdownContent";
import { Spinner } from "../../../shared/components/ui/Spinner/Spinner";

const HashnodePostContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<HashnodePostNode | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setIsLoading(true);
      const data = await HashnodeBlogService.getPostBySlug(slug);
      setPost(data);
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white dark:bg-black">
        <Spinner />
      </div>
    );
  }

  if (!post) return <div>Cargando...</div>;

  return (
    <div className="mx-auto px-2 py-10 pt-14 md:py-20">
      <div className="mx-auto my-4 max-w-4xl p-4">
        {/* Breadcrumb */}
        <nav className="text-md mb-6 text-black dark:text-white">
          <Link to="/" className="hover:text-blue-500">Inicio</Link>{" / "}
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>{" / "}
          <span className="text-blue-500">{post.title}</span>
        </nav>

        {/* Post Content */}
        <h1 className="b mb-6 text-3xl font-bold">{post.title}</h1>
        
        {post.coverImage?.url && (
          <img
            className="mx-auto mb-4 h-auto max-h-96 w-2/3 rounded-lg object-cover sm:w-1/2"
            src={post.coverImage.url}
            alt={post.title}
          />
        )}
        
        <MarkdownContent content={post.content.markdown} />
      </div>
    </div>
  );
};

export { HashnodePostContent };

