import { Link } from "react-router-dom";
import { BlogCardProps, Post, Tag } from "../../types/post";
import { Button } from "../../components/Button/Button";

const BlogCard = (blogCardProps: BlogCardProps) => {
  const { posts } = blogCardProps;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12 lg:px-24">
      {posts.map((post: Post, index: number) => (
        <div
          key={index}
          className="flex flex-col bg-white dark:bg-black dark:rounded-lg"
        >
          {post.fields.featuredImage && (
            <div className="p-4">
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                className="w-full h-auto max-h-48 object-cover rounded-lg mb-4"
              />
            </div>
          )}
          <div className="flex-grow p-4 pt-0">
            <p className="text-xs font-semibold mb-4 text-gray-900 dark:text-white hover:text-blue-500 transition-colors">
              {post.fields.author.fields.name} -{" "}
              {new Date(post.fields.publishDate).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <Link to={`/blog/${post.fields.slug}`}>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white hover:text-blue-500 transition-colors">
                {post.fields.title}
              </h2>
            </Link>

            <div className="text-gray-700 dark:text-gray-300 mb-4">
              {post.fields.summary}
            </div>

            <div className="flex flex-wrap mb-4">
              {post.fields.tags.map((tag: Tag, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag.fields.name}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 px-32 pt-0">
            <Button
              className="readMore"
              content="Leer más"
              url={`/blog/${post.fields.slug}`}
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { BlogCard };
