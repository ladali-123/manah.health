import AppointmentForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import { useEffect } from "react";
import img1 from "../assets/BookingCarousel.jpg";

export default function BookingPage() {
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
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience premium services tailored just for you.
          </p>
        </div>
      </section>
      <section>
        <AppointmentForm />
      </section>
      <section>
        <WhyChooseUsSection />
      </section>
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
