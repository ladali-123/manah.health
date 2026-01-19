import HoverButton from "./HoverAnimate";

const TherapyBenefits = ({ title, description, benefits, image, cards }) => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center text-lg text-gray-700"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 text-white bg-[var(--color-button-primary)] rounded-full mr-3">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={image}
            alt="Therapy benefits"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex mt-14 flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-xl shadow-md gap-6 md:gap-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 ${
              index !== cards.length - 1 ? "md:border-r md:pr-8" : "md:pl-8"
            }`}
            style={{ borderColor: "#e5e5e5" }}
          >
            {/* Icon */}
            {/* <div className="w-12 h-12 bg-[#b4b19c] flex items-center justify-center rounded-md">
              {card.icon}
            </div> */}
            <HoverButton className="w-28 h-16 bg-[#035b99] flex items-center justify-center rounded-md" text={card.icon}/>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapyBenefits;
