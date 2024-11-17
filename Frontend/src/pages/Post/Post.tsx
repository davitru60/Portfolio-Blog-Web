/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogService } from "../../services/blogService";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";

const Post = () => {
  const { slug } = useParams<{ slug: string }>(); // Obtiene el slug de la URL
  const [post, setPost] = useState<any>(null); // Estado para almacenar el post

  useEffect(() => {
    const fetchPost = async () => {
      const data = await BlogService.getBlogPosts();
      const foundPost = data.props.post.find(
        (p: any) => p.fields.slug === slug,
      ); // Busca el post por slug
      setPost(foundPost);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Cargando...</div>;

  return (
    <div className="mx-auto mt-12">
      <div className="mx-auto my-4 max-w-4xl p-4">
        <h1 className="b mb-6 text-3xl font-bold">{post.fields.title}</h1>
        <img
          className="mx-auto mb-4 h-auto max-h-96 w-1/2 rounded-lg object-cover"
          src={post.fields.featuredImage.fields.file.url}
        ></img>
        <MarkdownContent content={post.fields.content} />
      </div>
    </div>
  );
};

export { Post };
