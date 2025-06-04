import { Link } from "react-router-dom";
import { HashnodeBlogCardProps } from "../../../interfaces/post";

const HashnodeBlogCard = (posts: HashnodeBlogCardProps) => {

  
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-24">
      {posts.posts.map((post, index) => (
        <Link
          to={`/blog/${post.slug}`}
          key={index}
          id={`post-${post.slug}`}
          className="dark:blog-card-dark mx-5 flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-black"
        >
          {post.coverImage && (
            <div className="w-full">
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="mb-4 h-auto max-h-48 w-full object-cover"
              />
            </div>
          )}

          <div className="lex-grow p-4 pt-0">
            <p className="mb-2 text-xs font-semibold text-gray-900 transition-colors dark:text-gray-300">
              {post.author.name} -{" "}
              {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-700 dark:text-white">
              {post.title}
            </h2>

            <div className="text-sm text-gray-700 dark:text-white">
              {post.brief.length > 195 ? post.brief.slice(0, 195) : post.brief}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { HashnodeBlogCard };
