import AboutSection from "../Components/AboutUsSection";
import BenefitsSection from "../Components/BenefitsSection";
import FAQSection from "../Components/FaqsSection";
import Footer from "../Components/Footer";
import TeamSection from "../Components/MeetTeam";
import Navbar from "../Components/Navbar";
import OurApproach from "../Components/OurApproach";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import { useEffect } from "react";
import img1 from "../assets/AboutCarousel.jpg";

export default function AboutUsPage() {
  const faqs = [
    {
      question:
        "Who is the best psychiatrist in Patna for mental health treatment?",
      answer:
        "Many patients trust the team at Manah Psychiatry, led by Dr. Archana Singh, one of the most experienced psychiatrists in Patna. With over 12 years of expertise in treating depression, anxiety, and mood disorders, she offers care that is both professional and compassionate.",
    },
    {
      question:
        "Which is the top psychiatry clinic in Patna for complete care?",
      answer:
        "Patients often recommend Manah Psychiatry as the top psychiatry clinic in Patna because of its skilled doctors, caring psychologists, and personalized treatment plans. The clinic provides therapy, counseling, and medication management under one roof, making recovery smoother and more reliable.",
    },
    {
      question: "Where can I find leading mental health doctors in Patna?",
      answer:
        "At Manah Psychiatry, you will find some of the leading mental health doctors in Patna. The clinic’s experts are trained in modern therapies like CBT and DBT and are known for their empathetic approach, helping patients feel understood and supported.",
    },
    {
      question:
        "Are there online consultation options with the best psychiatrists in Patna?",
      answer:
        "Yes, Manah Psychiatry provides online consultations with some of the best psychiatrists in Patna. This makes it easy for patients to seek help from the comfort of their homes, ensuring privacy, convenience, and timely mental health support.",
    },
    {
      question:
        "Which psychiatry center in Patna offers care for children and teenagers?",
      answer:
        "Manah Psychiatry is a trusted psychiatry center in Patna that provides dedicated care for children and adolescents. With specialists like Dr. Bhoomika Sachacher, the team gently helps young minds manage stress, ADHD, and emotional challenges with patience and understanding.",
    },
    {
      question:
        "Where can I find trusted psychiatric rehabilitation services in Patna?",
      answer:
        "Manah Psychiatry offers psychiatric rehabilitation through experts like Ms. Jaya Bhardwaj, who designs therapy programs to help patients regain confidence and independence. Families choose the clinic because recovery here is supported with both medical care and emotional guidance.",
    },
    {
      question:
        "Which clinic provides treatment for depression and anxiety in Patna?",
      answer:
        "Manah Psychiatry is known for effective treatment of depression and anxiety in Patna. The clinic combines safe medication, therapy, and counseling to help patients feel better. With its caring team, many patients find hope and lasting recovery here.",
    },
    {
      question: "Who provides neuropsychiatric care in Patna?",
      answer:
        "The experts at Manah Psychiatry provide advanced neuropsychiatric care for conditions that involve both the brain and mental health. Patients trust the clinic for its scientific approach blended with compassion, ensuring both medical accuracy and emotional support.",
    },
    {
      question: "Which is the best mental health clinic in Patna for families?",
      answer:
        "Families often choose Manah Psychiatry as the best mental health clinic in Patna because it offers complete care for all age groups. From children to adults, the clinic focuses on healing with kindness, confidentiality, and personalized attention.",
    },
    {
      question: "How can I book an appointment with a psychiatrist in Patna?",
      answer:
        "Booking a consultation at Manah Psychiatry is simple and quick. Patients can schedule online or by phone, and the friendly team ensures every step feels safe and welcoming. Many people say that reaching out here gave them the first step towards recovery.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--color-text-primary)]">
            Manah Psychiatry: Your Sanctuary for Mental Wellness in Patna
          </h1>
          <p className="text-lg md:text-xl mb-6 text-[var(--color-card-background)] leading-relaxed">
            At Manah Psychiatry, we believe your mind deserves as much care as
            your body. Discover how our friendly and expert team, guided by
            leading psychiatrists in Patna, provides compassionate in-clinic and
            online support, helping individuals and families embark on a journey
            towards lasting healing and peace of mind.
          </p>
        </div>
      </section>
      <AboutSection />
      <OurApproach />
      <BenefitsSection />
      <WhyChooseUsSection />
      <TeamSection />
      <FAQSection faqs={faqs} />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
