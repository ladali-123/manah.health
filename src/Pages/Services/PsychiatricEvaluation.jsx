import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons";

// Import your images
import img1 from "../../assets/PsychiatricEvaluation/CarouselPsychiatricEvaluation.jpg";
import img2 from "../../assets/PsychiatricEvaluation/CondescendingDoctor.jpg";
import img3 from "../../assets/PsychiatricEvaluation/EvaluationCouple.jpg"; 
import img4 from "../../assets/PsychiatricEvaluation/PsychiatricPortrait.jpg";

// A simple checkmark icon component for lists
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export default function PsychiatricEvaluation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // NEW CONTENT FROM YOUR DOCUMENT

  const whatToExpectSteps = [
    {
      number: "01",
      title: "Warm Welcome",
      description:
        "We provide a warm welcome and ensure your comfort and safety.",
    },
    {
      number: "02",
      title: "Friendly Talk",
      description:
        "Simple inquiries regarding your mood, everyday activities, sleep patterns, employment, and relationships will be made by the doctor. Only what you feel comfortable sharing is allowed.",
    },
    {
      number: "03",
      title: "Understanding Feelings",
      description:
        "Together, we try to understand your thoughts, emotions, and worries, just like solving a puzzle gently, piece by piece.",
    },
    {
      number: "04",
      title: "Planning Care",
      description:
        "After listening with love, the doctor may suggest steps like talking sessions, lifestyle tips, or medicine if needed.",
    },
    {
      number: "05",
      title: "Support & Guidance",
      description:
        "There will always be someone to mentor you. Every action is done with respect, kindness, and patience.",
    },
  ];

  const earlyDiagnosisBenefits = [
    "Quick Relief – You don't have to struggle for long; help comes sooner.",
    "Improved Care: The sooner we identify the issue, the simpler it is to provide the appropriate care.",
    "Prevents Bigger Issues: Minor concerns are addressed before they become more significant.",
    "Improves Daily Life: School, work, family, and friendships feel lighter and happier.",
    "Provides Peace of Mind: Fear and perplexity are eliminated because you comprehend what is happening.",
  ];

  const whyChooseUsCards = [
    {
      title: "Kind and Caring Doctors",
      description:
        "Our doctors listen with patience and affection, even though they are experts.",
    },
    {
      title: "Complete Check for the Mind",
      description:
        "We look at your thoughts, feelings, sleep, and daily life to understand you fully.",
    },
    {
      title: "Care Made Just for You",
      description:
        "Every person is special, so your care plan is made only for you.",
    },
    {
      title: "Safe Space",
      description:
        "You can share anything here. No judgment, only care and kindness.",
    },
    {
      title: "One Team for You",
      description:
        "Doctors, therapists, and counselors collaborate to help you feel better.",
    },
    {
      title: "Always With You",
      description:
        "We stick by you, little by little, till your heart is light and your mind is calm.",
    },
  ];

  const faqs = [
    {
      question: "What is a Comprehensive Mental Health Assessment?",
      answer:
        "A comprehensive mental health assessment is a gentle and detailed check-up of your mind and emotions. At Manah Psychiatry, Patna, our experts listen to your feelings, thoughts, and daily struggles to understand the complete picture of your mental health. This helps us create a care plan that is personal and effective.",
    },
    {
      question: "Why should I choose a Psychiatric Evaluation in Patna?",
      answer:
        "A psychiatric evaluation in Patna helps you get expert guidance without the stress of traveling far. At Manah Psychiatry, you meet compassionate doctors who take the time to understand you deeply. Our evaluations are about finding the root cause of your worries and giving you the right tools to heal.",
    },
    {
      question:
        "What are Mental Health Diagnostic Services and how do they help?",
      answer:
        "Our mental health diagnostic services in Patna use safe and gentle tools like conversations, questionnaires, and tests to understand your emotions and behaviors. These services make sure we don’t miss anything important. With an early and accurate diagnosis, you can start healing sooner and prevent small worries from turning into bigger problems.",
    },
    {
      question: "Who should go for a Psychiatric Evaluation?",
      answer:
        "Anyone who feels sad, anxious, tired, or stressed for many days can benefit. If you find it hard to sleep, study, focus, or manage relationships, it may be time to reach out. Remember—you don't have to wait until things get worse.",
    },
    {
      question: "Is a Mental Health Assessment confidential?",
      answer:
        "Yes, absolutely. Our first concern at Manah Psychiatry, Patna, is protecting your privacy. All of the information you give us is kept totally private. We offer a secure, accepting environment where you may freely express your emotions.",
    },
    {
      question:
        "How do I book a Comprehensive Mental Health Assessment in Patna?",
      answer:
        "Booking is simple! You can call us, WhatsApp us, or fill out our easy appointment form. We also offer online consultations for those who cannot visit in person. At Manah Psychiatry, we make sure getting help is quick, comfortable, and stress-free.",
    },
    {
      question:
        "How is a Comprehensive Mental Health Assessment different from a regular consultation?",
      answer:
        "A comprehensive assessment takes more time and care than a quick consultation. Instead of just treating surface symptoms, our psychiatrist at Manah Psychiatry looks at your full emotional, social, and medical history. This deeper approach helps us find the root cause of your struggles and design the best treatment plan for long-term healing.",
    },
    {
      question: "What happens after a Psychiatric Evaluation?",
      answer:
        "After your evaluation, our doctor will explain the findings in simple words and suggest a care plan. This may include therapy, lifestyle guidance, or medicines if required. You'll also have regular follow-ups so we can support you at every step.",
    },
    {
      question:
        "Can children and teenagers undergo Mental Health Diagnostic Services?",
      answer:
        "Yes, of course. Our services are for people of all ages. Kids often face problems with focus, sleep, or mood changes, and early diagnosis helps them recover faster. We use gentle, kid-friendly methods so children feel safe and comfortable.",
    },
    {
      question:
        "Why should I choose Manah Institute for Mental Health Care in Patna?",
      answer:
        "At Manah Psychiatry, we combine expertise with compassion. Our clinic offers comprehensive assessments, evaluations, and diagnostic services all under one roof. With a warm environment, experienced doctors, and complete confidentiality, we ensure every patient feels heard, cared for, and supported.",
    },
  ];

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Comprehensive Psychiatric Evaluation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            At Manah Psychiatry, we gently and compassionately offer the kind of
            help that's appropriate to your need. We'll be with you every step
            of the way.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          {/* Left: Service Navigation */}
          <ServiceLayout currentService="Mental Health Assessment" />

          {/* Right: Content Section */}
          <div className="flex-1 overflow-y-auto">
            {/* --- Section: Why a Comprehensive Evaluation Matters --- */}
            <h2 className="text-3xl font-bold text-gray-900">
              Why a Comprehensive Psychiatric Evaluation Matters
            </h2>
            <p className="mt-4 text-gray-600">
              Because it helps identify the true origins of your feelings, a
              thorough psychiatric evaluation is important. A lot of individuals
              mistake melancholy for depression or stress for anxiety. The
              appropriate treatment could be postponed in the absence of a
              thorough evaluation.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                It ensures accurate diagnosis – so you get the right care from
                the start.
              </li>
              <li className="flex items-start">
                <CheckIcon />
                It helps your psychiatrist design a treatment plan just for you.
              </li>
              <li className="flex items-start">
                <CheckIcon />
                It builds trust and understanding between you and your doctor.
              </li>
              <li className="flex items-start">
                <CheckIcon />
                It prevents complications by addressing concerns early.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 font-medium">
              At Manah Psychiatry, we make sure your evaluation is gentle,
              respectful, and thorough, so you feel supported at every step.
            </p>
            <img
              src={img2}
              alt="Comforting mental health assessment"
              className="mt-8 mb-12 rounded-lg w-full object-cover"
            />

            {/* --- Section: Conditions We Commonly Assess --- */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12">
              Conditions We Commonly Assess
            </h2>
            <p className="mt-4 text-gray-600">
              We understand that our minds can get tired or sick, just like our
              bodies. These feelings are just signs that your mind needs a bit
              of extra love and care. Here are some issues we gently assist
              with.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-xl font-semibold">Anxiety</h4>
                <p className="text-gray-600">
                  When worries feel too big and keep circling in your mind.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Depression</h4>
                <p className="text-gray-600">
                  Your sadness stays for a long time and makes life feel heavy.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Sleep Problems</h4>
                <p className="text-gray-600">
                  When your mind doesn't let you rest or sleep peacefully.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Mood Changes</h4>
                <p className="text-gray-600">
                  When your feelings suddenly go up and down.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Attention & Focus Issues
                </h4>
                <p className="text-gray-600">
                  You feel hard to concentrate, study, or remember things.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Stress in Relationship
                </h4>
                <p className="text-gray-600">
                  When it feels difficult to connect with family or friends.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TherapyBenefits
          title="The Gift of Early Diagnosis"
          description="Just like catching a small cold early stops it from becoming a big fever, finding mental health concerns early makes healing easier. At Manah Psychiatry, we believe that early diagnosis is a gift—it helps you feel better, faster."
          benefits={earlyDiagnosisBenefits}
          image={img3}
          cards={[
            // These can remain the same or be updated if you wish
            {
              icon: manInHandIcon(),
              title: "Accurate Diagnosis",
              description:
                "Gain a precise understanding of your mental health.",
            },
            {
              icon: stethoscopeIcon(),
              title: "Customized Treatment Plans",
              description: "Receive a plan designed for your unique needs.",
            },
          ]}
        />

        <TherapySection
          heading="What to Expect During the Assessment"
          subheading="Coming for a mental health check can feel a little scary at first, but don't worry—at Manah, it's just like having a gentle conversation with someone who truly cares."
          steps={whatToExpectSteps}
          image={img4}
        >
          {/* This content will be passed as 'children' to TherapySection */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Multidisciplinary Approach
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              At Manah, we believe that healing becomes stronger when caring
              hands come together. Different experts work as one team to take
              care of your mind and heart.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-xl">Psychiatrists</h4>
                <p className="text-gray-600">
                  Medical experts who can provide therapy or medicines if
                  needed.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">
                  Therapists and Psychologists
                </h4>
                <p className="text-gray-600">
                  They listen and assist you in talking about your feelings and
                  figuring out healthy coping strategies.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">Counselors</h4>
                <p className="text-gray-600">
                  Gentle guides who support you in daily struggles,
                  relationships, and life challenges.
                </p>
              </div>
            </div>
          </div>
        </TherapySection>

        {/* --- Section: Why Choose Our Clinic --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Families Trust Manah Psychiatry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We care for your mind just like we care for our own family. We
              know it can feel scary to ask for help, but here you will always
              find gentle hands, kind words, and a safe place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {whyChooseUsCards.map((card, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <FAQSection faqs={faqs} heading="Frequently Asked Questions" />

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
