import { useEffect, useState } from "react";
import {
  HashnodeAllPostsResponse,
  HashnodePostEdge,
  HashnodePostNode,
  SessionPost,
} from "../../../interfaces/post";
import { HashnodeBlogService } from "../../../services/hashnode/hashnodeBlogService";
import { HashnodeBlogCard } from "./HashnodeCard";
import { HashnodeHeader } from "./HashnodeHeader";
import useScrollPosition from "../../../hooks/useScrollPosition";

const SESSION_KEY = "hashnode_blog_data";

const BlogList = () => {
  const [posts, setPosts] = useState<HashnodePostNode[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<HashnodePostNode[]>([]);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Recuperar scroll
  const isReady = posts.length > 0;
  useScrollPosition("1", isReady);

  // Guardar posts en sessionStorage
  const savePostToSession = (sessionPost: SessionPost) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionPost));
  };

  // Cargar posts desde sessionStorage
  const loadPostsFromSession = () => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      const parsed: SessionPost = JSON.parse(saved);
      setPosts(parsed.posts);
      setHasNextPage(parsed.hasNextPage);
      setEndCursor(parsed.endCursor);
      return parsed;
    }
    return null;
  };

  //Prevenir duplicados en los posts al paginar o recargar
  const mergeUniquePosts = (
    existing: HashnodePostNode[],
    incoming: HashnodePostNode[],
  ): HashnodePostNode[] => {
    const existingIds = new Set(existing.map((p) => p.id));
    return [...existing, ...incoming.filter((p) => !existingIds.has(p.id))];
  };

  // Extraer nodos de posts de la respuesta
  const extractPostNodes = (
    fetched: HashnodeAllPostsResponse,
  ): HashnodePostNode[] => {
    return fetched.publication.posts.edges.map(
      (edge: HashnodePostEdge) => edge.node,
    );
  };

  // Función para obtener los posts desde Hashnode
  const fetchPosts = async (cursor: string | null = null) => {
    try {
      setIsLoading(true);

      // Si hay un cursor, lo pasamos a la función de servicio
      const fetchedPosts = await HashnodeBlogService.getBlogPosts(
        cursor ?? undefined,
      );

      // Extraer los nodos de posts de la respuesta
      const newPosts = extractPostNodes(fetchedPosts);

      
      setPosts((prev) => {
        const updatedPosts = mergeUniquePosts(prev, newPosts);

        const pageInfo = fetchedPosts.publication.posts.pageInfo;

        const sessionPost: SessionPost = {
          posts: updatedPosts,
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor,
        };


        savePostToSession(sessionPost);
        return updatedPosts;
      });

      const pageInfo = fetchedPosts.publication.posts.pageInfo;

      // Actualizar el estado de paginación
      setHasNextPage(pageInfo.hasNextPage);
      setEndCursor(pageInfo.endCursor);
    } catch (error) {
      console.error("Error al cargar posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para cargar más posts al hacer scroll o al hacer clic en "Ver más"
  const loadMore = () => {
    setPage((prev) => prev + 1);
    fetchPosts(endCursor);
  };

  // Filtrar posts por término de búsqueda
  const filterBySearchTerm = (
    posts: HashnodePostNode[],
    searchTerm: string,
  ): HashnodePostNode[] => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.brief?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  // Filtrar posts cuando cambia el término de búsqueda
  useEffect(() => {
    let results = [...posts];
    results = filterBySearchTerm(results, searchTerm);
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  // Cargar posts al montar el componente o al cambiar de página
  useEffect(() => {
    const cached = loadPostsFromSession();
    if (cached) {
      // Si hay datos en sessionStorage, los usamos
      setPosts(cached.posts);
      setHasNextPage(cached.hasNextPage);
      setEndCursor(cached.endCursor);
    } else {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <HashnodeHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mx-auto p-4">
        <HashnodeBlogCard posts={filteredPosts} />

        {hasNextPage ? (
          <div className="mt-4 flex justify-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="text-md rounded border-0 bg-black px-6 py-2 text-white focus:outline-none dark:bg-white dark:text-black md:text-lg"
            >
              {isLoading ? "Cargando..." : "Ver más"}
            </button>
          </div>
        ) : (
          posts.length > 0 && (
            <p className="mt-4 text-center text-gray-500">
              No hay más publicaciones.
            </p>
          )
        )}
      </div>
    </>
  );
};

export { BlogList };
