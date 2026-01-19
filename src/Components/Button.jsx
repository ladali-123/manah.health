import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  size = "md",
  text,
  href = "",
  onClick,
  variant = "primary",
}) => {
  // Define size styles
  const sizeClasses = {
    sm: "px-3 py-1 my-4 text-sm",
    md: "px-5 py-3 my-4 text-base",
    lg: "px-7 py-3 my-4 text-lg",
  };

  // Define variant styles
  const variantClasses = {
    primarie:
      "w-full text-[var(--color-button-text)] bg-[var(--color-button-primary)] group-hover:text-white",
    primary:
      "text-[var(--color-button-text)] bg-[var(--color-button-primary)] group-hover:text-white",
    secondary:
      "text-[var(--color-text-primary)] group-hover:text-[var(--color-star)] bg-white text-black border group-hover:bg-[var(--color-button-primary-hover)] hover:text-white",
    outline:
      "text-[var(--color-star)] group-hover:text-[var(--color-text-primary)]",
  };

  // Base styles for hover effects and overall structure
  const baseStyles =
    "group relative inline-flex items-center justify-start overflow-hidden rounded-full font-bold transition-all";

  // Render logic for internal or external links
  const isExternal = href.startsWith("http") || href.startsWith("https");

  const linkContent = (
    <>
      {/* Background overlay effects */}
      <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-[var(--color-button-primary)] opacity-[3%]"></span>
      <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[var(--color-button-primary-hover)] opacity-100 transition-transform duration-500 ease-in-out group-hover:-translate-x-8"></span>

      {/* Text content */}
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out">
        {text}
      </span>

      {/* Border */}
      <span className="absolute inset-0 rounded-full border-2 border-[var(--color-button-primary)] hover:border-[var(--color-button-primary-hover)]"></span>
    </>
  );

  return !isExternal ? (
    <Link
      to={href}
      onClick={onClick}
      className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {linkContent}
    </Link>
  ) : (
    <a
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkContent}
    </a>
  );
};

// Define PropTypes for better developer experience
Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
};

// Default props for better usability
Button.defaultProps = {
  size: "md",
  href: "#",
  variant: "primary",
  onClick: null,
};

export default Button;
