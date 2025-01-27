/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BlogService } from '../../services/blogService';
import { BlogHeader } from './BlogHeader';
import { BlogCard } from './BlogCard';
import { Post } from '../../interfaces/post';
import { Pagination } from '../../components/Pagination/Pagination';
import { Spinner } from '../../components/Spinner/Spinner';

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
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
    return posts.filter((post) =>
      post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.fields.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterByCategory = (posts: Post[], selectedCategories: string[]): Post[] => {
    if (selectedCategories.length === 0) {
      return posts;
    } else {
      return posts.filter((post) =>
        post.fields.tags &&
        post.fields.tags.some((tag) =>
          selectedCategories.includes(tag.fields.name)
        )
      );
    }
  };

  const paginatePosts = (filteredPosts: Post[]) => {
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  };

  useEffect(() => {
    let results = [...posts];

    results = filterBySearchTerm(results, searchTerm);
    results = filterByCategory(results, selectedCategories);

    setFilteredPosts(results);
  }, [searchTerm, posts, selectedCategories]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          <Spinner/>
        ) : (
          <BlogCard posts={paginatePosts(filteredPosts)} />
        )}
       
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export { BlogPage };
