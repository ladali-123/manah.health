import Button from "./Button";
import { Link } from "react-router-dom";

const BlogSection = ({ blogs, isHomePage }) => {
  return (
    <section className="bg-[var(--color-background)] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {isHomePage && (
          <>
            <h4 className="text-[var(--color-badge)] text-sm font-semibold tracking-wide mb-2">
              Read Our Blogs
            </h4>
            <h2 className="text-[var(--color-heading)] text-3xl md:text-4xl font-bold mb-6">
              Get to know all about mental health
            </h2>
            <Button
              className="px-6 py-2 rounded md:mb-12 mb-8 -mt-4"
              text="View all Blogs"
              href="/blogs"
            />
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[var(--color-card-background)] rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[var(--color-heading)] text-xl font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  {blog.description}
                </p>
                <Link
                  to={blog.link}
                  className="text-[var(--color-button-primary)] flex items-center text-sm font-medium hover:underline mt-auto"
                >
                  Learn More <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
