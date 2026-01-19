const HoverButton = ({ className = "", text = "Button" }) => {
    return (
      <div
        className={`relative inline-flex group items-center justify-center cursor-pointer shadow-lg ${className}`}
      >
        {/* Hover Background */}
        <span
          className={`rounded-md absolute w-0 h-0 transition-all duration-300 ease-out bg-[var(--color-button-primary-hover)] group-hover:w-full group-hover:h-full opacity-90`}
        ></span>
  
        {/* Text */}
        <span className="relative font-bold">{text}</span>
      </div>
    );
  };
  
  export default HoverButton;