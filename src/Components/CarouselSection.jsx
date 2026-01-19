import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./Button";

import heroImg1 from "../assets/Carousel2.jpg";
import heroImg2 from "../assets/Carousel1.jpg";
import heroImg3 from "../assets/Carousel3.jpg";

import mobilebg1 from "../assets/mobilebg1.jpg";
import mobilebg2 from "../assets/mobilebg2.jpg";
import mobilebg3 from "../assets/mobilebg3.jpg";

function MotionCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = [
    {
      image: isMobile ? mobilebg2 : heroImg1,
      h1: "Dr. Archana Singh: Your Trusted Psychiatrist in Patna",
      h2: "Expert Online Psychiatry & Comprehensive Mental Health Care",
      p: "At Manah Psychiatry, Dr. Archana Singh offers compassionate, personalized care. Begin your journey to peace of mind with leading mental health services.",
    },
    {
      image: isMobile ? mobilebg3 : heroImg2,
      h1: "Top Psychiatry Clinic in Patna | Manah Psychiatry",
      h2: "Trusted Mental Health & Online Consultation for All Ages",
      p: "Access leading mental health doctors in Patna from the comfort of your home. We provide gentle support for depression, anxiety, ADHD, and mood changes.",
    },
    {
      image: isMobile ? mobilebg1 : heroImg3,
      h1: "Healing Minds with Care: Personalized Mental Wellness",
      h2: "Holistic Treatment for Anxiety, Depression & ADHD Support",
      p: "Discover trusted मानसिक स्वास्थ्य सेवाएं पटना at our top clinic. We blend science with kindness for lasting healing, guiding you towards a healthier, happier life.",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={currentSlide.image}
            alt={`Slide ${current + 1}: ${currentSlide.h1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

          {/* TEXT CONTENT */}
          <div
            className="
              absolute inset-0 z-20
              flex flex-col justify-center
              px-4 text-white

              md:inset-auto md:left-16 md:bottom-24
              md:block md:w-1/2
            "
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {currentSlide.h1}
            </h1>

            <h2 className="mt-2 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
              {currentSlide.h2}
            </h2>

            <p className="mt-3 text-base sm:text-lg md:text-lg leading-relaxed max-w-full md:max-w-lg">
              {currentSlide.p}
            </p>

            <div className="mt-5">
              <Button
                text="Learn More"
                href="/about"
                variant="primary"
                className="text-lg px-6 py-3"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MotionCarousel;
