/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogService } from "../../services/blogService";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import { Spinner } from "../../components/Spinner/Spinner";

const PostContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const data = await BlogService.getBlogPosts();
      const foundPost = data.find((p: any) => p.fields.slug === slug); // Busca el post por slug
      setPost(foundPost);
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  // Spinner a nivel de página completa
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-white dark:bg-black">
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
          <Link to="/" className="hover:text-blue-500">
            Inicio
          </Link>{" "}
          /{" "}
          <Link to="/blog" className="hover:text-blue-500">
            Blog
          </Link>{" "}
          / <span className="text-blue-500">{post.fields.title}</span>
        </nav>

        {/* Post Content */}
        <h1 className="b mb-6 text-3xl font-bold">{post.fields.title}</h1>
        <img
           className="mx-auto mb-4 h-auto max-h-96 w-2/3 sm:w-1/2 rounded-lg object-cover"
          src={post.fields.featuredImage.fields.file.url}
          alt={post.fields.title}
        />
        <MarkdownContent content={post.fields.content} />
      </div>
    </div>
  );
};

export { PostContent };
