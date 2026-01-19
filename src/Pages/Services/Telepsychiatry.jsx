import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons";

// Import your images
import img1 from "../../assets/Telepsychiatry/CarouselTelepsychiatry.webp";
import img2 from "../../assets/Telepsychiatry/CalmGuy.webp";
import img3 from "../../assets/Telepsychiatry/SmilingWoman.webp";
import img4 from "../../assets/Telepsychiatry/ThinkingWoman.webp";

// A simple checkmark icon component for lists
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-[var(--color-button-primary)] mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Telepsychiatry() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  // NEW CONTENT FROM YOUR DOCUMENT

  const howItWorksSteps = [
    {
      number: "01",
      title: "Book Your Appointment",
      description:
        "You can easily fix a time for your session. No long waits, no stress.",
    },
    {
      number: "02",
      title: "Join from Home",
      description:
        "At your appointment time, connect with your doctor through a video call, phone call, or chat.",
    },
    {
      number: "03",
      title: "Share Your Feelings",
      description:
        "Tell us what's on your mind — sadness, worry, stress, or anything else. Your doctor will listen with kindness and patience.",
    },
    {
      number: "04",
      title: "Gentle Evaluation",
      description:
        "Your doctor will learn about your feelings and opinions through a polite talk, much like during a clinic visit.",
    },
    {
      number: "05",
      title: "Personalized Care Plan",
      description:
        "We create a healing plan just for you which includes counseling, therapy and safe medicines if needed.",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "With our virtual psychiatric care, we stay by your side, checking in and guiding you whenever you need us.",
    },
  ];

  const telepsychiatryBenefits = [
    "Comfort of Home: Have a conversation with your psychiatrist from your favorite chair.",
    "No Travel Stress: No buses, trains or long drives. Care is just one click away.",
    "Safe & Private: Our virtual care is fully confidential. Your privacy is always respected.",
    "Access to Experts: Connect with the best doctors, even if you live far away.",
    "Help for All Ages: Online sessions are simple and easy for children, teens, adults, and elders.",
    "Quick Support: When you're feeling low, you don't have to wait weeks. Help can be arranged much faster.",
  ];

  const whyChooseUsCards = [
    {
      title: "Experienced Psychiatrists",
      description:
        "Our doctors are gentle listeners who truly care about your feelings and your journey.",
    },
    {
      title: "Convenience at Home",
      description: "Talk to your doctor without leaving your home.",
    },
    {
      title: "Complete Care Online",
      description:
        "From diagnosis to treatment and therapy, everything is managed online with ease.",
    },
    {
      title: "Privacy & Safety",
      description:
        "Your personal stories, worries and information are always kept safe and confidential.",
    },
    {
      title: "Accessible Everywhere",
      description:
        "Even if you live in a small town or far away, help is just one video call away.",
    },
    {
      title: "Caring Approach",
      description:
        "We don't just give treatment; we walk with you, step by step, with kindness and love.",
    },
  ];

  const faqs = [
    {
      question: "What is telepsychiatry and how does it work?",
      answer:
        "Telepsychiatry is simply mental health care online. Instead of visiting the clinic, you can connect with an online psychiatrist through a secure video or phone call. At Manah Psychiatry, our consultation feels just like an in-person visit, but more convenient and private.",
    },
    {
      question: "Can telepsychiatry help with depression and anxiety?",
      answer:
        "Yes, telepsychiatry is highly effective for concerns like depression and anxiety. You can share your feelings from home and still receive the right treatment, medicines, and guidance.",
    },
    {
      question: "Is online psychiatry as effective as visiting a clinic?",
      answer:
        "Absolutely. Research shows that online services work just as well as face-to-face consultations. Our doctors listen carefully, provide accurate diagnoses, and guide your treatment with the same compassion, only with more comfort and time-saving.",
    },
    {
      question: "Who can benefit from telepsychiatry services?",
      answer:
        "Anyone who needs care but finds it hard to visit a clinic. Whether you live far away, have a busy schedule, or prefer privacy, telepsychiatry makes support accessible to children, adults, and seniors alike.",
    },
    {
      question: "Why should I choose Manah Psychiatry for online care?",
      answer:
        "At Manah Psychiatry, you are a person we truly care about. We offer expert doctors, confidential sessions, easy follow-ups, and e-prescriptions—all with warmth and kindness. Choosing Manah means choosing trusted care that is safe, personal, and always close to you.",
    },
    {
      question: "Is my privacy safe during online consultations?",
      answer:
        "Yes, your privacy is fully protected. Every consultation takes place on a secure platform where your personal details and conversations are kept completely confidential.",
    },
    {
      question: "Can I get medicines through online psychiatry services?",
      answer:
        "Of course. After your session, our doctors provide safe e-prescriptions. You can get the right medicines from your nearest pharmacy without delays.",
    },
    {
      question: "How do follow-ups work in telepsychiatry?",
      answer:
        "Follow-ups are simple and stress-free. Your psychiatrist will schedule regular online consultations to track your progress, adjust medicines if needed, and give emotional support—all from the comfort of your home.",
    },
    {
      question: "Is telepsychiatry affordable?",
      answer:
        "Yes, telepsychiatry often saves time and money. You don't have to travel or wait in long queues. Our care is designed to be cost-effective while still offering expert support.",
    },
    {
      question: "Can I connect with a psychiatrist if I live outside Patna?",
      answer:
        "Absolutely. Our telepsychiatry consultation in India allows you to connect with expert psychiatrists no matter where you live. Manah Psychiatry brings trusted mental health care right to your home.",
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
            Telepsychiatry Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            A gentle way to get mental health care online, no matter where you
            are. Help and healing are now just one call away.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          <ServiceLayout currentService="Telepsychiatry" />
          <div className="flex-1 overflow-y-auto">
            <img
              src={img2}
              alt="Man using laptop for telepsychiatry"
              className="mt-10 rounded-lg w-full object-cover"
            />
            <h2 className="text-3xl font-bold mt-8 text-gray-900">
              What is Telepsychiatry?
            </h2>
            <p className="mt-4 text-gray-600">
              Sometimes our mind needs care, just like our body does. Instead of
              going to the clinic, you can talk to a kind doctor through a video
              call, phone call, or even chat right from your home. At Manah
              Psychiatry, our online services make it simple and safe to reach
              out.
            </p>
            <p className="mt-4 text-gray-600">
              Telepsychiatry feels just like a clinic visit — you share your
              thoughts, the doctor understands your feelings, and together you
              make a soft plan to feel better. The only change is that it all
              happens virtually, which makes it private, safe, and very
              convenient.
            </p>

            {/* --- Section: Who Can Benefit --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Who Can Benefit from Online Consultations?
              </h3>
              <p className="mt-4 text-gray-600">
                Online consultations are for anyone who needs a caring ear and
                expert help but finds it easier to connect from home. You may
                benefit if:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckIcon />
                  You feel sad or low (depression) and need gentle guidance.
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  You feel too worried or anxious and seek peace and comfort.
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  You find it hard to travel and want to save time and energy.
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  You want privacy in a safe, private session between you and
                  your doctor.
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  You need support quickly, without long waiting times.
                </li>
              </ul>
            </section>

            {/* --- Section: Conditions We Treat --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Conditions We Commonly Treat Online
              </h3>
              <p className="mt-4 text-gray-600">
                Our online psychiatry services are here to gently help with many
                different mental health conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg">Depression</h4>
                  <p className="text-gray-500">
                    When sadness feels very heavy and won't go away.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Anxiety</h4>
                  <p className="text-gray-500">
                    When worries and fears become too big and make life
                    difficult.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bipolar Disorder</h4>
                  <p className="text-gray-500">
                    When feelings go from very high to very low.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Schizophrenia & Psychosis
                  </h4>
                  <p className="text-gray-500">
                    When someone needs gentle but strong medical care.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sleep Problems</h4>
                  <p className="text-gray-500">
                    When you can't sleep or wake up feeling rejuvenated.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">OCD & PTSD</h4>
                  <p className="text-gray-500">
                    For obsessive thoughts or stress after difficult events.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <TherapyBenefits
          title="Why Patients Love Telepsychiatry"
          description="Telepsychiatry brings care closer to you—right into your home. You don't have to travel far or wait long to get help. Healing becomes easier, safer, and more caring."
          benefits={telepsychiatryBenefits}
          image={img3}
          cards={[
            {
              icon: manInHandIcon(),
              title: "Private Conversations",
              description:
                "Everything you share stays between you and your psychiatrist.",
            },
            {
              icon: stethoscopeIcon(),
              title: "Safe Online Platform",
              description:
                "We use secure systems so no one else can listen in or see.",
            },
          ]}
        />

        <TherapySection
          heading="How Our Virtual Sessions Work"
          subheading="Our online psychiatry services are simple, safe, and caring. With telepsychiatry, help is always close—just one call away, bringing care and comfort straight to your home."
          steps={howItWorksSteps}
          image={img4}
        />

        {/* --- Section: Why Choose Manah Psychiatry --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Telepsychiatry Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that care should be close to your heart, not far from
              your reach. Choosing Manah means choosing a place where your
              mental health is respected, protected, and nurtured with care.
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
        </section>
      </div>
      <FAQSection
        faqs={faqs}
        heading="Frequently Asked Questions about Telepsychiatry"
      />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
