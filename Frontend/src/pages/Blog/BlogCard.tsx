import { Link } from 'react-router-dom';
import { BlogCardProps, Post, Tag } from '../../interfaces/post';

const BlogCard = (blogCardProps: BlogCardProps) => {
  const { posts } = blogCardProps;
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-24">
      {posts.map((post: Post, index: number) => (
        <Link
          to={`/blog/${post.fields.slug}`}
          key={index}
          className="mx-10 flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-black"
        >
          {post.fields.featuredImage && (
            <div className="w-full">
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                className="mb-4 h-auto max-h-48 w-full object-cover"
              />
            </div>
          )}

          <div className="flex-grow p-4 pt-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.fields.tags.map((tag: Tag, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-800/30 dark:text-blue-200"
                >
                  {tag.fields.name}
                </span>
              ))}
            </div>
            <p className="mb-4 text-xs font-semibold text-gray-900 transition-colors dark:text-gray-300">
              {post.fields.author.fields.name} -{' '}
              {new Date(post.fields.publishDate).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <h2 className="mb-2 text-xl font-semibold leading-tight text-gray-700 dark:text-white">
              {post.fields.title}
            </h2>

            <div className="mb-4 text-sm text-gray-700 dark:text-white">
              {post.fields.summary}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { BlogCard };
