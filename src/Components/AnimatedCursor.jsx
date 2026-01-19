import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Hide the cursor for screens smaller than 768px
      setIsVisible(window.innerWidth >= 768);
    };

    // Attach resize listener
    window.addEventListener("resize", handleResize);

    // Check on initial load
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isVisible && (
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={false}
        innerStyle={{
          backgroundColor: "#000",
        }}
        outerStyle={{
          border: "3px solid #000",
        }}
      />
    )
  );
};

export default CustomCursor;
