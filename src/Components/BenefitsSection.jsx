import { FaRegHeart, FaLayerGroup, FaRegChartBar } from "react-icons/fa"; // Removed HiUserGroup as a direct icon for simplicity and clarity with the new benefits
import { HiUserGroup } from "react-icons/hi"; // Retained for a specific benefit
import Button from "./Button";
import img1 from "../assets/TherapyBenefits.webp";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <FaRegHeart className="text-[var(--color-button-primary)] text-3xl" />
      ), // Stronger primary color for icons, larger size
      title: "Compassionate Care & Respect",
      description:
        "We show genuine kindness, deep respect, and understanding to each and every patient, creating a welcoming and safe environment for your healing journey.",
    },
    {
      icon: (
        <FaLayerGroup className="text-[var(--color-button-primary)] text-3xl" />
      ), // Represents integrated/layered approach to healing
      title: "Holistic Healing Approach",
      description:
        "Our focus extends beyond just medicine, nurturing your mind, emotions, and overall well-being for a complete and lasting recovery.",
    },
    {
      icon: (
        <FaRegChartBar className="text-[var(--color-button-primary)] text-3xl" />
      ), // Represents progress and improvement
      title: "Enhanced Quality of Life",
      description:
        "With our expert guidance, you'll gain improved focus, build healthier relationships, and embrace a happier, more fulfilling daily routine.",
    },
    {
      icon: (
        <HiUserGroup className="text-[var(--color-button-primary)] text-3xl" />
      ), // Represents the expert team
      title: "Trusted & Experienced Expertise",
      description:
        "Benefit from years of collective experience and thousands of lives transformed through our gentle, expert, and evidence-based care.",
    },
  ];

  return (
    <section className="bg-[var(--color-background-soft)] py-16 px-4 lg:px-8">
      {" "}
      {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto">
        {/* Heading & Intro */}
        <div className="text-center mb-12">
          {" "}
          {/* Centered the heading block */}
          <p className="text-base uppercase tracking-wide text-[var(--color-button-primary)] font-semibold mb-2">
            {" "}
            {/* Highlighted with primary color, bolder */}
            Our Unique Advantages
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-heading)] leading-tight mb-4">
            Experience Transformative Care for Your Mental Wellness Journey
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mt-4 max-w-3xl mx-auto leading-relaxed">
            {" "}
            {/* Centered and increased max-width */}
            At Manah Psychiatry, we don&apos;t just manage symptoms—we help you
            rediscover peace, confidence, and joy in life. Discover the distinct
            advantages of choosing us for your mental health journey.
          </p>
          {/* Button below the intro text */}
          <div className="mt-8">
            {" "}
            {/* Added margin top to button */}
            <Button
              text="Book Your Consultation"
              variant="primary"
              href="https://book-appointment.healthplix.com/dr-dr-archana-singh-psychiatry-ashiana-nagar--patna"
              size="lg"
            />
          </div>
        </div>

        {/* Main Section - Image and Benefits Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mt-12">
          {" "}
          {/* Increased gap */}
          {/* Image */}
          <div className="lg:flex-1 lg:order-2">
            {" "}
            {/* Changed order to put image on right on desktop */}
            <img
              src={img1}
              alt="Person finding peace through psychiatric care"
              className="rounded-xl shadow-xl h-[400px] md:h-[500px] w-full object-cover" // Larger height, full width, more prominent shadow
            />
          </div>
          {/* Benefits Grid */}
          <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:order-1">
            {" "}
            {/* Increased gap, changed order */}
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-card-background)] transition-transform duration-300 ease-in-out hover:scale-105 p-6 rounded-xl shadow-lg text-center flex flex-col items-center border-t-4 border-[var(--color-button-primary)]" // Hover effect, larger rounded corners, shadow, border
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-2">
                  {benefit.title}
                </h3>{" "}
                {/* Stronger heading */}
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>{" "}
                {/* Better line height */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
