import { Link } from "react-router-dom";
import { BlogCardProps, Post, Tag } from "../../types/post";
import { Button } from "../../components/Button/Button";

const BlogCard = (blogCardProps: BlogCardProps) => {
  const { posts } = blogCardProps;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2  md:px-12 lg:grid-cols-3 lg:px-24">
      {posts.map((post: Post, index: number) => (
        <div
          key={index}
          className="flex flex-col dark:rounded-3xl dark:bg-black p-2"
        >
          {post.fields.featuredImage && (
            <div className="p-4">
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                className="mb-4 h-auto max-h-48 w-full rounded-lg object-cover"
              />
            </div>
          )}
          <div className="flex-grow p-4 pt-0">
            <p className="mb-4 text-xs font-semibold text-gray-900 transition-colors dark:text-white">
              {post.fields.author.fields.name} -{" "}
              {new Date(post.fields.publishDate).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <Link to={`/blog/${post.fields.slug}`}>
              <h2 className="mb-4 text-xl font-semibold text-gray-900 bg-gradient-text">
                {post.fields.title}
              </h2>
            </Link>

            <div className="mb-4 text-gray-700 dark:text-gray-300">
              {post.fields.summary}
            </div>

            <div className="mb-4 flex flex-wrap">
              {post.fields.tags.map((tag: Tag, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                >
                  {tag.fields.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto p-4 pt-0">
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
