
import Button from "./Button";
import img1 from "../assets/HappyWomanBlurred.webp"; // Image on the left side of the card
import bgImage from "../assets/BookingCardBgBlurred.jpg"; // Background image for the whole section

const CardSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" px-4 lg:px-8 lg:mx-12 mx-2 rounded-lg relative overflow-hidden" // Added relative for absolute overlay positioning
    >
      {/* Optional: Dark overlay for the entire background image if text needs more contrast */}
      {/* <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-lg"></div> */}

      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden relative z-10">
        {" "}
        {/* z-10 to ensure content is above optional full overlay */}
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          {" "}
          {/* Added explicit height for mobile consistency */}
          <img
            src={img1}
            alt="Person experiencing peace of mind"
            className="w-full h-full object-cover rounded-lg md:rounded-none md:rounded-l-lg" // Rounded image corners, specific for md screens
          />
        </div>
        {/* Content Section */}
        {/* Added a semi-transparent dark background for text readability */}
        <div className="w-full md:w-1/2 p-6 md:p-8 rounded-lg md:rounded-none md:rounded-r-lg space-y-4 
        
        text-[var(--color-heading)]">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Ready for a Brighter Tomorrow?
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            You Deserve to Feel Better. We Can Help.
          </p>
          <p className="text-base leading-relaxed text-justify md:text-left">
            At Manah, we aim to provide comprehensive mental health support,
            empowering individuals to overcome challenges and lead fulfilling
            lives. Our mission is to promote mental well-being for all.
          </p>

          <Button
            className="w-full md:w-auto px-8 py-3 rounded-full text-center font-bold text-lg" // Fuller width on mobile, rounded-full button
            text="Book Your Confidential Consultation" // More descriptive and reassuring
            variant="primary" // Changed to primary for main CTA
            href="https://book-appointment.healthplix.com/dr-dr-archana-singh-psychiatry-ashiana-nagar--patna"
            size="lg" // Ensure it's large and prominent
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
