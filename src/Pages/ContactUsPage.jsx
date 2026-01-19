import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import ContactForm from "../Components/NotBookingForm";
import img1 from "../assets/ContactCarousel.webp";
import OurApproach from "../Components/OurApproach";

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <div className="bg-white w-full">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact us for all your queries
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn how we tranform your life through therapy and wellness.
          </p>
        </div>
      </section>
      <ContactForm />
      <OurApproach />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
