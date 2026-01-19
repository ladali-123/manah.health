import img1 from "../assets/ManahLogo.webp";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--color-button-primary)] z-50">
      {/* Spinning Loader */}
      <div className="relative rounded-full w-36 h-36 lg:w-52 lg:h-52 bg-transparent text-white flex items-center justify-center animate-spin-slow">
        {/* SVG Container */}
        <svg
          className="w-full h-full"
          viewBox="0 0 210 210"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle for the text path */}
          <defs>
            <path
              id="circlePath"
              d="M105,105 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0"
            />
          </defs>
          <text
            fill="#fff"
            fontSize="22"
            fontFamily="sans-serif"
            textAnchor="middle"
          >
            <textPath href="#circlePath" startOffset="50%">
              Manah Institute of Psychiatry and Behavioral Sciences
            </textPath>
          </text>
        </svg>

        {/* Center PNG Image */}
        <img
          src={img1}
          alt="Center Image"
          className="absolute w-24 h-24"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
