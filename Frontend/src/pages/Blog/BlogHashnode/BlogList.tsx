import { useEffect, useState } from "react";
import { HashnodePostNode } from "../../../interfaces/post";
import { HashnodeBlogService } from "../../../services/hashnode/hashnodeBlogService";
import { HashnodeBlogCard } from "./HashnodeCard";
import { HashnodeHeader } from "./HashnodeHeader";
import { useLocation } from "react-router-dom";
import useScrollPosition from "../../../hooks/useScrollPosition";

const BlogList = () => {
  const [posts, setPosts] = useState<HashnodePostNode[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<HashnodePostNode[]>([]);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  // Para obtener el número de página desde la URL
  const currentPage = new URLSearchParams(location.search).get("page") || "1";
  const isReady = posts.length > 0;
  useScrollPosition(currentPage, isReady);



  const fetchPosts = async (cursor: string | null = null) => {
    try {
      setIsLoading(true);
      const fetchedPosts = await HashnodeBlogService.getBlogPosts(
        cursor ?? undefined,
      );
      const postsNodes = fetchedPosts.publication.posts.edges.map(
        (edge) => edge.node,
      );

      setPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newPosts = postsNodes.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newPosts];
      });

      const pageInfo = fetchedPosts.publication.posts.pageInfo;
      setHasNextPage(pageInfo.hasNextPage);
      setEndCursor(pageInfo.endCursor);
    } catch (error) {
      console.error("Error al cargar posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

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

  useEffect(() => {
    let results = [...posts];

    results = filterBySearchTerm(results, searchTerm);

    setFilteredPosts(results);
  }, [searchTerm, posts]);

  return (
    <>
      <HashnodeHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mx-auto p-4">
        <HashnodeBlogCard posts={filteredPosts} />

        {hasNextPage && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => fetchPosts(endCursor)}
              disabled={isLoading}
              className="text-md rounded border-0 bg-black px-6 py-2 text-white focus:outline-none dark:bg-white dark:text-black md:text-lg"
            >
              {isLoading ? "Cargando..." : "Ver más"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { BlogList };
