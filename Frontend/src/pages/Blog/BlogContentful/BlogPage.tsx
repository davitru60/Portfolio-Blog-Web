/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogService } from "../../../services/contentful/blogService";
import { BlogHeader } from "./BlogHeader";
import { BlogCard } from "./BlogCard";
import { Post } from "../../../interfaces/post";
import { Pagination } from "../../../shared/components/ui/Pagination/Pagination";
import { Spinner } from "../../../shared/components/ui/Spinner/Spinner";
import useScrollPosition from "../../../hooks/useScrollPosition";

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [itemsPerPage] = useState<number>(3);

  const location = useLocation();
  const navigate = useNavigate();

  // Para obtener el número de página desde la URL
  const currentPage = new URLSearchParams(location.search).get("page") || "1";

  const isReady = posts.length > 0;
  useScrollPosition(currentPage, isReady);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await BlogService.getBlogPosts();
      setPosts(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await BlogService.getCategories();
      const categoryName = data.props.category.map((cat: any) => {
        return cat.fields.name;
      });
      setCategories(categoryName);
    };

    fetchCategories();
  }, []);

  const filterBySearchTerm = (posts: Post[], searchTerm: string): Post[] => {
    return posts.filter(
      (post) =>
        post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.fields.summary.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const filterByCategory = (
    posts: Post[],
    selectedCategories: string[],
  ): Post[] => {
    if (selectedCategories.length === 0) {
      return posts;
    } else {
      return posts.filter(
        (post) =>
          post.fields.tags &&
          post.fields.tags.some((tag) =>
            selectedCategories.includes(tag.fields.name),
          ),
      );
    }
  };

  const paginatePosts = (filteredPosts: Post[]) => {
    const indexOfLastPost = parseInt(currentPage) * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  };

  // Efecto que se dispara al aplicar filtros o realizar una búsqueda
  useEffect(() => {
    let results = [...posts];

    // Filtro por término de búsqueda
    results = filterBySearchTerm(results, searchTerm);

    // Filtro por categorías seleccionadas
    results = filterByCategory(results, selectedCategories);

    setFilteredPosts(results);

    const totalPages = Math.ceil(results.length / itemsPerPage);
    const currentPageNumber = parseInt(currentPage);

    // Si la página actual es mayor que el total de páginas, redirigir a la página 1
    if (currentPageNumber > totalPages && totalPages > 0) {
      navigate("?page=1");
    }
  }, [
    searchTerm,
    posts,
    selectedCategories,
    currentPage,
    itemsPerPage,
    navigate,
  ]);

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber: number) => {
    // Actualizamos la URL con el nuevo número de página
    navigate(`?page=${pageNumber}`);
  };

  // Total de páginas basadas en los posts filtrados
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <>
      <BlogHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        resultCount={filteredPosts.length}
      />
      <div className="mx-auto p-4">
        {isLoading ? (
          <Spinner />
        ) : (
          <BlogCard posts={paginatePosts(filteredPosts)} />
        )}

        <Pagination
          totalPages={totalPages}
          currentPage={parseInt(currentPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export { BlogPage };
