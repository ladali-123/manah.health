import HoverButton from "./HoverAnimate";

const TherapySection = ({ steps, heading, subheading, image, children }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-gray-50 py-12 px-4 lg:px-20 lg:gap-12">
      {/* Portrait Image */}
      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <img
          src={image}
          alt="Therapy"
          className="w-full max-w-[350px] lg:max-w-none h-auto rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Content Wrapper */}
      <div className="w-full lg:w-2/3 space-y-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-base lg:text-lg text-gray-700">{subheading}</p>
        </div>

        {/* Steps Section */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Number Badge */}
              <HoverButton
                className="w-20 h-20 bg-[var(--color-button-primary)] flex-shrink-0 flex items-center justify-center rounded-md text-xl font-semibold text-white"
                text={step.number}
              />

              {/* Step Content */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Child Content Section - This is the flexible part */}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </div>
  );
};

export default TherapySection;
