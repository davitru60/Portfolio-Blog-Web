/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BlogService } from '../../services/blogService';
import { BlogHeader } from './BlogHeader';
import { BlogCard } from './BlogCard';

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await BlogService.getBlogPosts();
      setPosts(data.props.post);
      setFilteredPosts(data.props.post);
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

  useEffect(() => {
    const results = posts.filter((post) => {
      const matchesSearch =
        post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.fields.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (selectedCategory) =>
            post.fields.tags &&
            post.fields.tags.some(
              (tag: { fields: { name: string } }) =>
                tag.fields.name === selectedCategory,
            ),
        );

      return matchesSearch && matchesCategory;
    });

    setFilteredPosts(results);
  }, [searchTerm, posts, selectedCategories]);

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
        <BlogCard posts={filteredPosts} />
      </div>
    </>
  );
};

export { BlogPage };
