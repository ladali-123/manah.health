import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons"; 

import img1 from "../../assets/TherapyAndCounselling/TherapyCarousel.webp";
import img2 from "../../assets/TherapyAndCounselling/PurpleTopGirl.webp";
import img3 from "../../assets/TherapyAndCounselling/OldCoupleHappy.webp";
import img4 from "../../assets/TherapyAndCounselling/TherapyPortrait.webp";
export default function PsychiatricConsultation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  // Content extracted from your document
  const howItWorksSteps = [
    {
      number: "01",
      title: "Caring First Encounter",
      description:
        "Our consultation is a cordial first encounter, where you can speak freely without worrying about being judged or afraid.",
    },
    {
      number: "02",
      title: "Active Listening and Gentle Discussion",
      description:
        "The psychiatrist listens carefully and talks with you (or your child) about your feelings, worries, and struggles to understand your whole picture.",
    },
    {
      number: "03",
      title: "Comprehensive Understanding",
      description:
        "We may ask gentle questions about daily life, school, friends, sleep, or mood, and sometimes involve parents/teachers for a complete view.",
    },
    {
      number: "04",
      title: "Collaborative Care Plan",
      description:
        "Together, we create a personalized care plan, which may include easy lifestyle tips, therapy, or medication, explained simply and with love.",
    },
    {
      number: "05",
      title: "Confidentiality and Patient Trust",
      description:
        "Your feelings, hardship, and personal stories are handled with the utmost care, respect, and total privacy in every conversation.",
    },
    {
      number: "06",
      title: "Follow-Up Care and Continuous Support",
      description:
        "Healing is a journey. We offer follow-up visits to monitor progress, adjust treatments, and ensure you always feel supported and never alone.",
    },
  ];

  const benefitsOfEarlyIntervention = [
    "Promotes better mental health outcomes.",
    "Leads to quicker recovery from emotional challenges.",
    "Helps build a happier and more stable future.",
    "Reduces stress levels significantly.",
    "Increases workplace and school attendance and performance.",
    "Strengthens relationships at home and at school.",
    "Children learn better coping skills, parents feel more supported, and families find more peace.",
    "Promotes self-assurance, emotional resilience, and long-term mental health.",
  ];

  const whyChooseUsCards = [
    {
      title: "Experienced Psychiatrists",
      description:
        "Our clinical and experienced professionals offer compassionate care, taking time to hear your story and build a care plan that suits your well-being.",
    },
    {
      title: "Easy Online Booking",
      description:
        "Book a psychiatrist online in Patna for yourself or your child, making expert help very easy and comfortable, even from your home.",
    },
    {
      title: "Tailored Support for Specific Needs",
      description:
        "Whether you need a depression, anxiety, or ADHD psychiatrist in Patna, our caring team guides you with love and understanding.",
    },
    {
      title: "Confidentiality and Trust",
      description:
        "We provide a safe space where your privacy is always secure, ensuring you can express yourself without fear or judgment.",
    },
    {
      title: "Early Intervention Focus",
      description:
        "We firmly believe early assistance is a loving gesture that prevents minor concerns from becoming major issues, promoting faster healing and resilience.",
    },
    {
      title: "Long-Term Well-being Dedication",
      description:
        "Our dedication to long-term support and a caring attitude means you're more than just a patient; you're a person deserving of kindness, direction, and a better future.",
    },
  ];

  const faqs = [
    {
      question: "1. What is a psychiatric consultation?",
      answer:
        "A psychiatric consultation is a detailed session where a specialist understands your emotional and mental health concerns. At Manah Psychiatry, we provide trusted psychiatrist consultation in Patna, offering guidance, diagnosis, and personalized treatment. Whether you are struggling with anxiety, depression, or ADHD, our consultations are safe, confidential, and focused on your complete well-being.",
    },
    {
      question: "2. How do I book a psychiatrist online?",
      answer:
        "Booking a psychiatrist online is simple and convenient. At Manah Psychiatry, you can easily book psychiatrist online in Patna, allowing you to consult from the comfort of your home. Online consultations are just as effective as in-person visits, giving you access to expert care for depression, anxiety, or ADHD with complete confidentiality.",
    },
    {
      question: "3. When should I see a depression psychiatrist?",
      answer:
        "If sadness, hopelessness, or lack of energy continues for weeks and affects your daily life, it may be time to consult a depression specialist. At Manah Psychiatry, our depression psychiatrist in Patna offers supportive care, safe treatment options, and a listening ear to help you regain positivity, motivation, and emotional balance in life.",
    },
    {
      question: "4. What happens in an anxiety psychiatrist consultation?",
      answer:
        "During an anxiety consultation, the psychiatrist listens to your symptoms like excessive worry, fear, or panic and designs a suitable plan for recovery. At Manah Psychiatry, our anxiety psychiatrist consultation in Patna ensures a caring and non-judgmental approach, helping you manage stress and build confidence for a calmer, healthier lifestyle.",
    },
    {
      question: "5. How can a psychiatrist help with ADHD?",
      answer:
        "A psychiatrist plays a key role in identifying and managing ADHD by using a mix of therapy, guidance, and medicines if needed. At Manah Psychiatry, our expert ADHD psychiatrist in Patna supports children, teens, and adults in improving focus, reducing restlessness, and achieving success at school, work, and home.",
    },
    {
      question: "6. Is online psychiatric consultation effective?",
      answer:
        "Yes, online consultations are highly effective and convenient for people who cannot visit in person. At Manah Psychiatry, you can book psychiatrist online in Patna and receive the same professional care as a face-to-face session. Our experts ensure you feel comfortable, understood, and guided toward healing, wherever you are.",
    },
    {
      question: "7. What conditions can a psychiatrist consultation address?",
      answer:
        "A psychiatrist consultation can address conditions like depression, anxiety, ADHD, stress, and mood disorders. At Manah Psychiatry, our psychiatrist consultation in Patna helps patients of all ages by providing accurate evaluation and treatment tailored to their needs, ensuring every individual receives compassionate care and long-term emotional support.",
    },
    {
      question: "8. How does a depression psychiatrist support recovery?",
      answer:
        "A depression psychiatrist listens to your struggles, diagnoses the condition, and recommends treatment like therapy or safe medication. At Manah Psychiatry, our trusted depression psychiatrist in Patna provides empathetic care and regular follow-ups, ensuring you feel supported at every step and helping you recover with confidence and strength.",
    },
    {
      question: "9. Why choose an ADHD psychiatrist?",
      answer:
        "An ADHD psychiatrist understands the challenges of inattention, hyperactivity, and impulsivity and helps manage them with patience and expertise. At Manah Psychiatry, our ADHD psychiatrist in Patna works closely with families to create child-friendly and effective care plans, ensuring children and teens thrive emotionally, academically, and socially.",
    },
    {
      question: "10. Are psychiatric consultations confidential?",
      answer:
        "Yes, confidentiality is the foundation of every consultation. At Manah Psychiatry, whether you visit in person or book psychiatrist online in Patna, your details remain private and protected. Our team values your trust, ensuring that every depression, anxiety, or ADHD consultation is safe, supportive, and handled with the utmost care.",
    },
  ];

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      {/* --- Hero Section --- */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Psychiatric Consultation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            A compassionate first encounter with a mental health professional.
            Find hope, comfort, and a brighter tomorrow with personalized guidance and care.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          <ServiceLayout currentService="PsychiatricConsultation" /> {/* Make sure this matches your service layout logic */}
          <div className="flex-1 overflow-y-auto">
            <img
              src={img2} // Replace img2 with a relevant image
              alt="Psychiatrist in a consultation session"
              className="mt-10 rounded-lg w-full object-cover"
            />
            <h2 className="text-3xl font-bold mt-8 text-gray-900">
              What is a Psychiatric Consultation?
            </h2>
            <p className="mt-4 text-gray-600">
              A psychiatric consultation is similar to a cordial first encounter with a mental
              health professional. We see a psychiatrist when our heart feels heavy, when we are
              overly anxious or when we have trouble controlling our emotions, much like we see
              a doctor when we have a fever or stomachache.
            </p>
            <p className="mt-4 text-gray-600">
              In this meeting, the psychiatrist listens carefully and talks with you about what
              you are going through and you can open up there without worrying about being judged or afraid.
              Sometimes, the doctor may offer easy lifestyle tips, therapy or medicines that can help you feel better.
            </p>
            <p className="mt-4 text-gray-600">
              At Manah Psychiatry, you can also book a psychiatrist online in Patna, so getting
              help is very easy and comfortable. Whether it's a depression psychiatrist in Patna,
              an anxiety psychiatrist consultation or support from an ADHD psychiatrist in Patna,
              our caring team is here to guide you with love and understanding.
            </p>
            <p className="mt-4 text-gray-600">
              A psychiatric consultation is not just about treatment—it's about finding hope, comfort, and a brighter tomorrow together.
            </p>

            {/* --- Section: When to Consider / Common Concerns --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                When Should You Consider a Consultation?
              </h3>
              <p className="mt-4 text-gray-600">
                When your thoughts or feelings begin to interfere with your day-to-day functioning,
                it may be the right time to reach out. We all have minor ups and downs from time
                to time, but a compassionate psychiatrist can be of great assistance if these
                emotions persist for an extended period of time or start to interfere with
                relationships, employment, or education.
              </p>
              <h4 className="font-semibold text-lg mt-6">Common Mental Health Concerns Addressed:</h4>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                <li>Depression (when sadness feels too heavy or lasts for weeks/months)</li>
                <li>Anxiety (when worries don't go away or feel too heavy to manage)</li>
                <li>ADHD (when your child struggles to focus on studies)</li>
                <li>Mood Changes (when sudden shifts in mood interfere with daily life)</li>
                <li>Work stress and relationship issues in adults</li>
              </ul>
              <p className="mt-4 text-gray-600">
                At Manah Psychiatry, whether you need a depression psychiatrist in Patna, help
                through an anxiety psychiatrist consultation, or guidance from an ADHD psychiatrist
                in Patna, our team makes sure you feel safe, supported, and understood. Early
                intervention promotes better mental health, quicker recovery, and a happier future,
                and always keep in mind that you are not alone on this path.
              </p>
            </section>
          </div>
        </div>

        <TherapyBenefits
          title="Benefits of Early Psychiatric Intervention"
          description="Early mental health care is akin to bandaging a small cut before it becomes infected. Youth and even adults, who receive assistance at the right time, proceed through and out of the experience faster and are more happy as a result."
          benefits={benefitsOfEarlyIntervention}
          image={img3} // Replace img3 with a relevant image
          cards={[
            {
              icon: manInHandIcon(), // Generic icon, replace if you have specific ones
              title: "Faster Recovery & Better Outcomes",
              description:
                "Receiving timely care helps prevent minor concerns from escalating, leading to quicker healing and greater happiness.",
            },
            {
              icon: stethoscopeIcon(), // Generic icon, replace if you have specific ones
              title: "Enhanced Daily Functioning",
              description:
                "Early support helps manage anxiety, depression, ADHD, or mood swings, making daily life feel lighter and easier to navigate.",
            },
          ]}
        />

        <TherapySection
          heading="How Our Psychiatric Consultation Process Works"
          subheading="Visiting Manah Psychiatry is like walking to the first step closer to a lighter, cheerful mind. We ensure every step is explained with love and in simple words, so you always feel comfortable and supported. Making sure you never feel alone on this path is our mission."
          steps={howItWorksSteps}
          image={img4} // Replace img4 with a relevant image
        />

        {/* --- Section: Why Choose Manah Psychiatry --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Psychiatric Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selecting the right psychiatrist is the first step on the path to healing.
              At Manah Psychiatry, we stride to make sure you feel safe, well cared for,
              and understood from your very first visit. Our goal is to bring back balance, peace, and hope in your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChooseUsCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-600 max-w-3xl mx-auto">
            Because of our dedication to long-term support, caring attitude, and total anonymity,
            families throughout Patna have faith in us. You are more than just a patient at Manah Psychiatry;
            you are a person deserving of kindness, direction, and a better future.
          </p>
        </section>
      </div>
      <FAQSection
        faqs={faqs}
        heading="Frequently Asked Questions about Psychiatric Consultation"
      />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}