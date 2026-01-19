import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons";

import img1 from "../../assets/MedicationManagement/CarouselMedication.webp";
import img2 from "../../assets/MedicationManagement/DoctorAndMedicineOnTable.webp";
import img3 from "../../assets/MedicationManagement/MedicinesAndCoffee.webp";
import img4 from "../../assets/MedicationManagement/MedicationsPortrait.webp";
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

export default function MedicationManagement() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  // Content from your document
  const howItWorksSteps = [
    {
      number: "01",
      title: "Gentle Listening and Understanding",
      description:
        "Our doctor takes time to hear your story, your feelings, and your struggles.",
    },
    {
      number: "02",
      title: "Personalized Treatment Plan",
      description:
        "If medication is needed, we prepare a safe and thoughtful plan just for you.",
    },
    {
      number: "03",
      title: "Start with the Lowest, Safest Dose",
      description:
        "We begin with the lowest and safest dose so your body adjusts slowly and comfortably.",
    },
    {
      number: "04",
      title: "Clear Explanations",
      description:
        "We explain everything clearly: how the medicine works, what it will help with, and when you may start noticing changes.",
    },
    {
      number: "05",
      title: "Regular Reviews and Adjustments",
      description:
        "We keep a loving eye on how you are doing, making minor dosage adjustments if needed.",
    },
    {
      number: "06",
      title: "Ongoing Support and Monitoring",
      description:
        "Our psychotropic medication monitoring ensures the medication is working well and you feel supported.",
    },
  ];

  const benefitsOfSupervision = [
    "Peace of Mind: You won't have to worry about the medication's appropriateness or dosage.",
    "Safest Way Possible: Your therapy always works in the safest way possible under our care.",
    "Prompt Side Effect Management: Any side effects are managed quickly to ensure your comfort.",
    "Expert Review: Our doctor carefully reviews everything to verify the drug is benefiting your illness.",
    "Personalized Adjustments: If necessary, minor adjustments are made to optimize your treatment.",
    "Family Relief: Families frequently feel relieved knowing a dependable professional is overseeing the process.",
  ];

  const whyChooseUsCards = [
    {
      title: "Experienced Psychiatrists",
      description:
        "Our doctors are gentle listeners who ensure medications are safe and administered appropriately.",
    },
    {
      title: "Meticulous Procedure",
      description:
        "We provide careful evaluation of how medication is working, listening to your feelings, and adjusting dosage.",
    },
    {
      title: "Psychotropic Medication Monitoring",
      description:
        "We keep a loving watch on how your body and mind are responding to treatment.",
    },
    {
      title: "Clear and Easy Explanations",
      description:
        "We explain everything in easy terms, so you understand your treatment without fear.",
    },
    {
      title: "Holistic Care Approach",
      description:
        "Medicines work best when combined with overall care, including healthy habits, lifestyle, and therapy.",
    },
    {
      title: "Unwavering Support",
      description:
        "We ensure you never feel alone on this journey, supporting you every step of the way.",
    },
  ];

  const faqs = [
    {
      question: "What is psychiatric medication management?",
      answer:
        "Psychiatric medication management means that a specialist thoughtfully prescribes, checks, and adjusts medicines to support mental health. At Manah Psychiatry, we focus on providing safe and caring medication management in Patna, making sure every patient gets the right dose, regular follow-ups, and personalized guidance for their emotional well-being.",
    },
    {
      question:
        "Why is medication management important in mental health treatment?",
      answer:
        "Medication management is important because it keeps treatments safe, effective, and tailored to each person. At Manah Psychiatry, our doctors provide ongoing psychotropic medication monitoring in Patna, ensuring medicines work properly while minimizing side effects, so patients feel healthier, happier, and more supported in their recovery journey.",
    },
    {
      question: "Can depression be treated with medication management?",
      answer:
        "Yes, depression often requires careful medication support. At Manah Psychiatry, our specialists provide depression medication oversight in Patna, ensuring medicines bring relief without unnecessary risks. With regular follow-ups, safe adjustments, and emotional support, patients recover faster and regain energy, confidence, and hope for a brighter tomorrow.",
    },
    {
      question: "How does psychotropic medication monitoring work?",
      answer:
        "Psychotropic medication monitoring is a way to track how medicines affect your mind and body. At Manah Psychiatry, our doctors offer trusted psychotropic medication monitoring in Patna, making sure each prescription works safely. Regular reviews help us adjust doses when needed, giving patients balance, peace, and steady progress.",
    },
    {
      question: "Are side effects common with psychiatric medications?",
      answer:
        "Some psychiatric medicines may cause mild side effects, but with expert care, these can be managed easily. At Manah Psychiatry, our team provides gentle psychiatric medication management in Patna, watching closely for changes, ensuring comfort, and adjusting treatment so patients stay safe while experiencing the maximum benefits of therapy.",
    },
    {
      question:
        "How often are follow-up visits needed for medication management?",
      answer:
        "Follow-up visits are usually scheduled every few weeks or months, depending on the patient's needs. At Manah Psychiatry, our doctors provide reliable depression medication oversight in Patna, making sure progress is steady and safe. Regular visits also give families peace of mind and patients the confidence to heal well.",
    },
    {
      question: "Is psychiatric medication management confidential?",
      answer:
        "Yes, all psychiatric treatment, including medication care, is kept completely private. At Manah Psychiatry, we ensure confidentiality in psychiatric medication management in Patna, protecting personal information and respecting every patient's dignity. Families trust us because we combine safe medical care with warmth, kindness, and complete privacy in every session.",
    },
    {
      question: "Who can benefit from medication management?",
      answer:
        "Anyone facing conditions like anxiety, depression, bipolar disorder, ADHD, or other challenges can benefit from medication care. At Manah Psychiatry, our compassionate team provides expert psychotropic medication monitoring in Patna, helping patients of all ages achieve balance, regain strength, and feel supported on their path to wellness.",
    },
    {
      question: "How does Manah Psychiatry ensure safe depression treatment?",
      answer:
        "At Manah Psychiatry, we provide careful depression medication oversight in Patna by reviewing each case individually. Our doctors choose safe, effective medicines and monitor progress closely. We adjust doses when needed, listen with kindness, and make sure patients recover with comfort, confidence, and ongoing emotional support for long-term healing.",
    },
    {
      question:
        "Why should I choose Manah Psychiatry for medication management?",
      answer:
        "Manah Psychiatry is trusted for its caring and safe approach to psychiatric medication management in Patna. With experienced doctors, regular follow-ups, and expert psychotropic medication monitoring, we make treatment simple and stress-free. Patients trust us because we combine medical expertise with compassion, ensuring recovery is always supported with love.",
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
            Medication Management
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Gentle guidance and careful oversight for your mental health
            medications, ensuring safety and effectiveness on your journey to
            wellness.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          <ServiceLayout currentService="MedicationManagement" />
          <div className="flex-1 overflow-y-auto">
            <img
              src={img2}
              alt="Doctor carefully reviewing medication"
              className="mt-10 rounded-lg w-full object-cover"
            />
            <h2 className="text-3xl font-bold mt-8 text-gray-900">
              What is Medication Management in Psychiatry?
            </h2>
            <p className="mt-4 text-gray-600">
              Sometimes, when our mind feels too heavy or our emotions feel out
              of control, doctors may suggest medicines to help us feel better.
              But just like a small child needs love, care, and guidance while
              growing, medicines too need proper care and checking. That&apos;s where
              medication management in psychiatry comes in.
            </p>
            <p className="mt-4 text-gray-600">
              At Manah Psychiatry, we ensure the medications are safe,
              administered appropriately, and actually aid in your recovery. To
              make sure you always feel supported, our specialists in Patna will
              gently evaluate how the medication is working for you, listen to
              your feelings, and adjust the dosage if necessary. Psychiatric
              medication management is the name given to this meticulous
              procedure.
            </p>
            <p className="mt-4 text-gray-600">
              We also do psychotropic medication monitoring, which means we keep
              a loving watch on how your body and mind are responding. For
              people taking medicines for sadness, worry, or mood problems, our
              depression medication oversight ensures that treatment is smooth
              and safe.
            </p>
            <p className="mt-4 text-gray-600">
              At Manah, we make sure you never feel alone on this journey by
              gently sitting with you and explaining everything in easy terms.
              Medicines are not to be feared; rather, they are like tiny
              assistants that restore your equilibrium, your hope, and your
              ability to smile.
            </p>

            {/* --- Section: Conditions We Treat --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Conditions Commonly Treated with Medication
              </h3>
              <p className="mt-4 text-gray-600">
                Like our bodies do when we take medication for a fever or cough,
                our minds occasionally require a little additional help.
                Similarly, safe medications can make some mental health
                disorders feel lighter and simpler to handle. At Manah
                Psychiatry in Patna, we provide gentle care for many conditions
                through psychiatric medication management. These include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg">Depression</h4>
                  <p className="text-gray-500">
                    When sadness stays for too long and feels very heavy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Anxiety</h4>
                  <p className="text-gray-500">
                    When daily living becomes difficult due to persistent
                    worries and anxiety.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ADHD</h4>
                  <p className="text-gray-500">
                    When children or adults find it tough to focus, sit still or
                    manage impulses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bipolar Disorder</h4>
                  <p className="text-gray-500">
                    When moods swing from feeling very low to very high, making
                    life confusing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sleep Problems</h4>
                  <p className="text-gray-500">
                    When restful sleep does not come easily and affects daily
                    health.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <TherapyBenefits
          title="Benefits of Professional Medication Supervision"
          description="Taking psychiatric medicines without proper guidance can sometimes feel confusing or even unsafe. Having expert pharmaceutical management at Manah Psychiatry in Patna is crucial for this reason."
          benefits={benefitsOfSupervision}
          image={img3}
          cards={[
            {
              icon: manInHandIcon(),
              title: "Confidentiality in Treatment",
              description:
                "Your story is respected and cared for with love and confidentiality.",
            },
            {
              icon: stethoscopeIcon(),
              title: "Trusted Care",
              description:
                "We don't just give medicines; we listen with kindness, explain everything in simple words, and guide you like a family member.",
            },
          ]}
        />

        <TherapySection
          heading="How Our Medication Management Works"
          subheading="At Manah Psychiatry, we offer a meticulous and caring approach to medication management. We are with you every step of the way, ensuring your treatment is safe, effective, and supports your journey to a happier life."
          steps={howItWorksSteps}
          image={img4}
        />

        {/* --- Section: Why Choose Manah Psychiatry --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Trust Our Clinic for Medication Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We at Manah Psychiatry recognize that taking medication for mental
              health issues can be a significant step. For this reason, we want
              your trip to be worry-free, safe, and kind. At Manah, your safety,
              privacy, and progress always come first.
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
        heading="Frequently Asked Questions about Medication Management"
      />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
