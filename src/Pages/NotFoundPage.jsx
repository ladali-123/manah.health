import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-6xl font-bold text-[var(--color-button-primary)] mb-4">
          404
        </h1>
        <p className="text-xl mb-6 text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-[var(--color-button-primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[var(--color-button-primary-hover)] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
