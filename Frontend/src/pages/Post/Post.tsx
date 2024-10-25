/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogService } from "../../services/blogService";
import {MarkdownContent} from "../../components/MarkdownContent/MarkdownContent";


const Post = () => {
  const { slug } = useParams<{ slug: string }>(); // Obtiene el slug de la URL
  const [post, setPost] = useState<any>(null); // Estado para almacenar el post

  useEffect(() => {
    const fetchPost = async () => {
      const data = await BlogService.getStaticProps();
      const foundPost = data.props.post.find(
        (p: any) => p.fields.slug === slug
      ); // Busca el post por slug
      setPost(foundPost);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{post.fields.title}</h1>
      <div className="my-4 p-4 max-w-4xl mx-auto"> 
        <MarkdownContent content={post.fields.content} />
      </div>
    </div>
  );
};

export { Post };
