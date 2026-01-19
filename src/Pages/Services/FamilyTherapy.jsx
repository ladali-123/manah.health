import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons"; // Assuming these are generic enough

import img1 from "../../assets/FamilyTherapy/FamilyTherapy.webp"; // You may update images if available
import img2 from "../../assets/FamilyTherapy/ManAndWife.webp";
import img3 from "../../assets/FamilyTherapy/LaughingFamily.webp";
import img4 from "../../assets/FamilyTherapy/PortraitFamily.webp";


export default function FamilyTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  // Content extracted from your document
  const howItWorksSteps = [
    {
      number: "01",
      title: "Gentle Listening and Patient Understanding",
      description:
        "We listen politely and patiently to understand your unique story and experiences.",
    },
    {
      number: "02",
      title: "Thorough Medical & Emotional History",
      description:
        "We carefully study your medical and emotional history to gain a complete understanding of your journey.",
    },
    {
      number: "03",
      title: "Advanced Evaluation Tools",
      description:
        "We use friendly tools like memory games, attention tasks, simple questionnaires, behavior checklists, and brain-function assessments.",
    },
    {
      number: "04",
      title: "Integrated Neurology-Psychiatry Approach",
      description:
        "Our approach combines the knowledge of both neurology (brain health) and psychiatry (mental health) for comprehensive support.",
    },
    {
      number: "05",
      title: "Collaborative Family Involvement",
      description:
        "We work closely with the family to acquire and understand the whole picture, ensuring holistic care.",
    },
    {
      number: "06",
      title: "Personalized Care Plan",
      description:
        "Once we clearly understand, we gently create a tailored care plan, focusing on rehabilitation and long-term support.",
    },
  ];

  const benefitsOfSpecializedTreatment = [
    "Looks at the full picture: connecting brain, thoughts, and emotions.",
    "Ensures more accurate, personalized, and effective treatment.",
    "Leads to increased focus, composure, and academic achievement for kids with ADHD.",
    "Results in more stable moods, solid relationships, and a contented everyday existence for adults with bipolar disorder.",
    "Provides families with peace of mind, knowing their loved one receives skilled treatment in both neurology and psychiatry.",
    "Helps people live healthier, more balanced, and more confident lives with gentle guidance.",
  ];

  const whyChooseUsCards = [
    {
      title: "Experienced Neuropsychiatrist",
      description:
        "Our Patna neuropsychiatrist has years of experience treating children, adolescents, and adults with various neuropsychiatric issues.",
    },
    {
      title: "Compassionate Support",
      description:
        "We provide sympathetic ears, encouraging words, and a secure environment where each patient is valued and understood.",
    },
    {
      title: "Comprehensive Approach",
      description:
        "Beyond medication, we closely monitor your health, walk you through each stage, and involve your family so nobody feels isolated.",
    },
    {
      title: "Ideal Balance of Science & Compassion",
      description:
        "We ensure every patient receives the ideal balance of advanced medical science and heartfelt compassion.",
    },
    {
      title: "Knowledge & Dependability",
      description:
        "Selecting Manah entails choosing expertise, reliability, and sustained assistance throughout your healing journey.",
    },
    {
      title: "Long-term Wellness Focus",
      description:
        "We assist people in rediscovering happiness, resilience, and hope in daily life, focusing on long-term well-being.",
    },
  ];

  const faqs = [
    {
      question: "Q1. What are neuropsychiatric services and how can they help?",
      answer:
        "Neuropsychiatric services in Patna bring together the study of the brain (neurology) and the mind (psychiatry) to treat conditions like ADHD, bipolar disorder, anxiety, and mood changes. At Manah Psychiatry, our team provides gentle and effective care to help patients heal, grow, and live happier lives.",
    },
    {
      question: "Q2. Who should visit a neuropsychiatrist?",
      answer:
        "If you or your loved one has challenges such as ADHD, memory problems, mood swings, or bipolar disorder, a neuropsychiatrist in Patna can give the right guidance. At Manah, we make sure every patient feels supported with both medical expertise and emotional care.",
    },
    {
      question: "Q3. How is neuropsychiatric care different from regular psychiatry?",
      answer:
        "Regular psychiatry focuses mainly on the mind, while neuropsychiatry also looks at how the brain and nervous system affect behavior. At Manah Psychiatry, our experts combine both approaches, ensuring you get complete and well-rounded care.",
    },
    {
      question: "Q4. Can ADHD be treated through neuropsychiatric care?",
      answer:
        "Yes, ADHD neuropsychiatry in Patna offers both diagnosis and long-term support. At Manah, we use child-friendly evaluations, therapy, and family guidance so children can focus better, do well in school, and build confidence.",
    },
    {
      question: "Q5. Is bipolar disorder treated by a neuropsychiatrist?",
      answer:
        "Absolutely. Bipolar neuropsychiatry in Patna helps patients manage mood swings and live more stable lives. At Manah Psychiatry, we provide personalized treatment plans that include therapy, medication, and continuous support for lasting recovery.",
    },
    {
      question: "Q6. Are online consultations available for neuropsychiatric care?",
      answer:
        "Yes, at Manah Psychiatry, you can connect with our neuropsychiatrist in Patna through safe and private online sessions. This makes care accessible, whether you are in Patna or anywhere else in India.",
    },
    {
      question: "Q7. How do I know if my child needs neuropsychiatric care?",
      answer:
        "If your child shows signs like difficulty paying attention, sudden mood changes, restlessness, or struggles at school, consulting a child ADHD neuropsychiatry specialist in Patna can help. At Manah, we make sure children feel safe, understood, and cared for.",
    },
    {
      question: "Q8. Why choose Manah Psychiatry for neuropsychiatric treatment?",
      answer:
        "Families trust Manah Psychiatry because we blend advanced medical science with compassion. Our neuropsychiatric services in Patna focus not just on treating conditions but also on guiding patients and families toward long-term wellness.",
    },
    {
      question: "Q9. What happens during a neuropsychiatric evaluation?",
      answer:
        "At Manah Psychiatry, we use advanced and gentle evaluation methods to understand both the brain and behavior. This helps our neuropsychiatrist in Patna create the right treatment plan for conditions like ADHD, bipolar disorder, and mood problems.",
    },
    {
      question: "Q10. Is neuropsychiatric treatment safe for children and teenagers?",
      answer:
        "Yes, neuropsychiatric care for ADHD, depression, and mood disorders is safe when given by experts. At Manah Psychiatry in Patna, we use child-friendly tools, involve families, and make sure treatment feels supportive and comforting.",
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
            Neuropsychiatric Care
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Like best friends who always stroll together, our brain and emotions are closely linked.
            Neuropsychiatric care helps when the brain isn't functioning properly, offering thorough,
            kind, and hopeful recovery.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          <ServiceLayout currentService="NeuropsychiatricCare" /> {/* Make sure this matches your service layout logic */}
          <div className="flex-1 overflow-y-auto">
            <img
              src={img2} // Replace img2 with a relevant image
              alt="Neuropsychiatrist providing care"
              className="mt-10 rounded-lg w-full object-cover"
            />
            <h2 className="text-3xl font-bold mt-8 text-gray-900">
              What is Neuropsychiatric Care?
            </h2>
            <p className="mt-4 text-gray-600">
              Emotions and conduct might sometimes get a little tricky when the brain isn't
              functioning properly. Neuropsychiatric care is here to help with this, treating the
              mind and brain together so that recovery feels thorough, kind, and hopeful.
            </p>
            <p className="mt-4 text-gray-600">
              Our neuropsychiatric services in Patna at Manah Psychiatry are intended to assist
              kids, teens, and adults who could be dealing with attention issues, extreme mood
              swings, or other illnesses that require professional assistance.
            </p>
            <p className="mt-4 text-gray-600">
              Our staff makes sure that every patient receives individualized, compassionate, and
              scientifically supported treatment, whether they are seeking bipolar neuropsychiatry
              in Patna for mood stability or ADHD neuropsychiatry in Patna for improved
              concentration and learning.
            </p>

            {/* --- Section: Conditions We Treat --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Conditions Commonly Treated in Neuropsychiatry
              </h3>
              <p className="mt-4 text-gray-600">
                Neuropsychiatry treats patients whose brains and minds are not functioning properly,
                and thoughts, emotions, and behaviors might feel unbalanced, much like when a musical
                instrument is slightly out of tune. At that point, tender care can have a significant
                impact. At Manah Psychiatry, our caring neuropsychiatrist in Patna helps children, teens,
                and adults with conditions such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg">ADHD</h4>
                  <p className="text-gray-500">
                    Difficulty in sitting down, concentrating, or paying attention during daily tasks or schoolwork.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bipolar Disorder</h4>
                  <p className="text-gray-500">
                    Excessive mood fluctuations, from very high to very low, making equilibrium difficult.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Memory or Attention Problems</h4>
                  <p className="text-gray-500">
                    When the brain feels forgetful or gets distracted easily, affecting daily function.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Depression & Anxiety linked to brain health</h4>
                  <p className="text-gray-500">
                    Persistent sadness, fear, or worry that comes along with brain-related conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Other Neuropsychiatric Disorders</h4>
                  <p className="text-gray-500">
                    Conditions where both the brain and the mind require special, integrated care.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <TherapyBenefits
          title="Benefits of Specialised Neuropsychiatric Treatment"
          description="Getting the right help at the right time can change lives. At Manah Psychiatry, our neuropsychiatric services in Patna are designed to give patients complete care for both their brain and mind."
          benefits={benefitsOfSpecializedTreatment}
          image={img3} // Replace img3 with a relevant image
          cards={[
            {
              icon: manInHandIcon(), // Generic icon, replace if you have specific ones
              title: "Comprehensive Care",
              description:
                "Looks at the full picture of brain, thoughts, and emotions, providing integrated support for holistic healing.",
            },
            {
              icon: stethoscopeIcon(), // Generic icon, replace if you have specific ones
              title: "Personalized Healing",
              description:
                "Treatment is tailored for accuracy, effectiveness, and individual needs, ensuring a unique path to wellness.",
            },
          ]}
        />

        <TherapySection
          heading="Our Comprehensive Approach to Neuropsychiatric Care"
          subheading="At Manah Psychiatry, we don't rush. We take time to gently understand what you or your loved one is going through, combining medical expertise with compassionate care to provide a complete healing journey."
          steps={howItWorksSteps}
          image={img4} // Replace img4 with a relevant image
        />

        {/* --- Section: Why Choose Manah Psychiatry --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Expertise in Neuropsychiatry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Manah Psychiatry, we understand that when the mind and brain feel unbalanced,
              life can become confusing and heavy. That's why our neuropsychiatric services in
              Patna are designed with both medical knowledge and gentle care.
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
        heading="Frequently Asked Questions about Neuropsychiatric Care"
      />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}