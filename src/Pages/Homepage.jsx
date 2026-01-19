import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutUsSection";
import MotionCarousel from "../Components/CarouselSection";
import ServicesSection from "../Components/ServicesSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import TherapyProcessSection from "../Components/ProcessSection";
import FAQSection from "../Components/FaqsSection";
import Footer from "../Components/Footer";
import CardSection from "../Components/BookingCard";
import AppointmentForm from "../Components/ContactForm";
import Testimonials from "../Components/TestimonialsSection";
import { useEffect } from "react";
import BlogSection from "../Components/BlogSection";
import img3 from "../assets/Blogs/SadWomanOnChair.webp";
import img4 from "../assets/Blogs/ManHeadTree.webp";
import img5 from "../assets/Blogs/InsideGlass.webp";
import MapSection from "../Components/MapSection";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const blogs = [
    {
      title: "What are Anxiety Disorders? Let’s Discover",
      description:
        "An overview of anxiety disorders, their symptoms, and available treatment options.",
      image: img3,
      link: "/blog/anxiety-disorders-2024",
      tags: ["anxiety", "mental health", "treatment"],
    },
    {
      title: "What is Mental Illness – Important Types & Treatments",
      description:
        "Explore the different types of mental illness and the treatments available for each.",
      image: img4,
      link: "/blog/mental-illness-2024",
      tags: ["mental health", "treatment", "mental illness"],
    },
    {
      title: "Coping with Social Isolation and Loneliness – What to know?",
      description:
        "Learn strategies for managing and overcoming social isolation and loneliness.",
      image: img5,
      link: "/blog/social-isolation-loneliness",
      tags: ["social isolation", "loneliness", "mental health"],
    },
  ];

  const faqs = [
    {
      question:
        "Who is the best psychiatrist in Patna for online consultation?",
      answer:
        "Many people look for the best psychiatrist in Patna online, and at Manah Psychiatry, we provide compassionate care, secure telepsychiatry, and personalized support so patients can get help from the comfort of home.",
    },
    {
      question:
        "What services does the top psychiatry clinic in Patna provide?",
      answer:
        "Our patients trust us as a top psychiatry clinic in Patna, and at Manah Psychiatry, we offer psychiatric consultations, mental health assessments, medication management, neuropsychiatric care, and child psychiatry services with complete privacy.",
    },
    {
      question: "Can I book a psychiatrist online in Patna easily?",
      answer:
        "Yes, booking a psychiatrist online in Patna is quick and simple with Manah Psychiatry, where appointments are flexible and care is delivered with professionalism and kindness.",
    },
    {
      question: "Do you provide मानसि क स्वास्थ्य सेवाएंपटना in Hindi?",
      answer:
        "Yes, at Manah Psychiatry, we provide मानसि क स्वास्थ्य सेवाएंपटना in both Hindi and English, making it easy for every patient to communicate and feel comfortable during treatment.",
    },
    {
      question: "How do I know if I need to visit a psychiatry center?",
      answer:
        "If you experience sadness, anxiety, mood swings, or concentration problems, visiting a psychiatry center is a wise step. At Manah Psychiatry, we guide patients with early diagnosis and safe care.",
    },
    {
      question:
        "What makes you one of the leading mental health doctors in Patna?",
      answer:
        "Being recognized among the leading mental health doctors in Patna, Manah Psychiatry is trusted for its experience, compassionate approach, and holistic treatment plans that prioritize emotional well-being.",
    },
    {
      question: "Is online psychiatry consultation in Patna confidential?",
      answer:
        "Yes, every online psychiatry consultation in Patna with Manah Psychiatry is completely safe and confidential, ensuring patients feel secure and respected throughout their care.",
    },
    {
      question:
        "Can children and teenagers also get psychiatric care at your clinic?",
      answer:
        "Yes, we specialize in child and adolescent psychiatry in Patna, and at Manah Psychiatry, children and teens receive gentle, family-friendly guidance for issues like ADHD, anxiety, and behavioral concerns.",
    },
    {
      question:
        "What are the benefits of choosing the top psychiatry clinic in Patna?",
      answer:
        "Choosing a top psychiatry clinic in Patna like Manah Psychiatry means getting expert doctors, personalized treatment, and a supportive environment where recovery is made easier.",
    },
    {
      question:
        "How do I book an appointment with the best psychiatrist in Patna online?",
      answer:
        "Booking with the best psychiatrist in Patna online is simple at Manah Psychiatry. Patients can schedule directly through our website and receive timely, professional, and personalized care.",
    },
  ];

  return (
    <div className="w-full bg-white text-white flex flex-col items-center overflow-hidden">
      <Navbar />
      <section className="w-full h-screen shadow-lg">
        <MotionCarousel/>
      </section>
      <section className="w-full">
        <AboutUs />
      </section>
      <section className="w-full">
        <ServicesSection />
      </section>
      <section className="w-full">
        <WhyChooseUsSection />
      </section>
      <section className="w-full">
        <CardSection />
      </section>
      <section className="w-full">
        <TherapyProcessSection />
      </section>
      <section className="w-full">
        <BlogSection blogs={blogs} isHomePage={true} />
      </section>
      <section className="w-full">
        <AppointmentForm />
      </section>
      <section className="w-full">
        <Testimonials />
      </section>
      <section className="w-full">
        <FAQSection faqs={faqs} heading="Frequently Asked Questions" />
      </section>
      <section className="w-full">
        <MapSection />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
}
