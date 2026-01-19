import { useEffect } from "react";
import FAQSection from "../../Components/FaqsSection";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ServiceLayout from "../../Components/ServiceLayout";
import TherapySection from "../../Components/TherapySection";
import TherapyBenefits from "../../Components/TherapyBenefits";
import { manInHandIcon, stethoscopeIcon } from "../../Components/SvgIcons";

import img1 from "../../assets/ChildAndAdolescentPsychiatry/ManSleeping.webp"; // Using for TherapySection image
import img2 from "../../assets/ChildAndAdolescentPsychiatry/CarouselChildPsychiatry.webp"; // Using for Hero background
import img3 from "../../assets/ChildAndAdolescentPsychiatry/YoungGirl.webp"; // Using for main content top image
import img4 from "../../assets/ChildAndAdolescentPsychiatry/HappyGirl.webp"; // Using for TherapyBenefits image

export default function ChildAdolescentPsychiatry() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  // Content extracted and refined from your document
  const howItWorksSteps = [
    {
      number: "01",
      title: "Firstly, a Hearty Welcome",
      description:
        "The visit often begins with a warm greeting, during which the doctor helps your child feel secure and at ease and we do things slowly and patiently since we realize that children can be shy or anxious.",
    },
    {
      number: "02",
      title: "Understanding Feelings & Behaviour",
      description:
        "The doctor may ask simple questions about school, friends, sleep or moods which helps us understand what the child is going through, whether it's ADHD, anxiety, depression or mood changes.",
    },
    {
      number: "03",
      title: "Child-Friendly Evaluation Tools & Approaches",
      description:
        "Manah Psychiatry uses unique kid-friendly methods to comprehend children's thoughts and feelings since we know that children open up best when they feel protected, loved, and understood. We use games, toys, drawings, simple stories, and gentle conversations.",
    },
    {
      number: "04",
      title: "Parental Guidance and Family Involvement",
      description:
        "Children feel safest and strongest when their parents and loved ones stand beside them. Parents are partners, receiving guidance on supporting their child at home and participating in discussions about what is doing well and what needs more attention. We also teach families how to recognize symptoms and react with compassion.",
    },
    {
      number: "05",
      title: "School Collaboration & Academic Support",
      description:
        "At Manah Psychiatry, with love and care, and only with your permission, we talk to your child's school teachers. We help them understand what your child needs, so learning feels easier and happier. We also guide the school to give small, kind changes like extra time, less pressure or gentle encouragement to build confidence.",
    },
    {
      number: "06",
      title: "Gentle Guidance & Next Steps",
      description:
        "At the end, the doctor may suggest a plan that could include talking sessions, simple exercises or if needed then safe medicines because our focus is always on helping the child feel happier, calmer and more confident. Each session is a safe space filled with kindness, love and care.",
    },
  ];

  const benefitsOfEarlyIntervention = [
    "Minor concerns don't become major issues.",
    "Facilitate learning and academic success.",
    "Strengthen bonds with friends and instill confidence.",
    "Children who receive help early frequently feel better and happier much faster.",
    "Develop self-control and confidence for conditions like ADHD, melancholy, anxiety or mood swings.",
    "Grow emotionally balanced, strong and reassured that they are not alone.",
    "Succeed academically, maintain happiness at home, and feel resilient in life.",
  ];

  const whyChooseUsCards = [
    {
      title: "Expert Child Psychiatrists",
      description:
        "Our specialists provide gentle guidance, ensuring kids and teens feel heard, understood, and cared for.",
    },
    {
      title: "Child-Friendly Approach",
      description:
        "We use unique kid-friendly ways like games, drawings, or simple talks to understand what is really going on in their little hearts and minds without pressure.",
    },
    {
      title: "Family-Centered Care",
      description:
        "We work hand-in-hand with families, explaining things in simple words, guiding parents step by step, offering advice, counseling, and check-ins to bring more peace at home.",
    },
    {
      title: "School Support & Collaboration",
      description:
        "With your permission, we collaborate with schools and teachers to ensure a supportive environment for your child's learning and growth, helping them succeed academically.",
    },
    {
      title: "Safe and Loving Space",
      description:
        "Our clinic is designed to be a second home, a place full of love, healing, and hope where children and teenagers feel safe, respected, and understood.",
    },
    {
      title: "Long-term Well-being",
      description:
        "We support your child's journey to become stronger, happier, and more self-assured, fostering emotional balance and resilience for lasting well-being.",
    },
  ];

  const faqs = [
    {
      question: "1. What does a child psychiatrist do?",
      answer:
        "A child psychiatrist assists kids in overcoming emotional, behavioral, and academic obstacles. At Manah Psychiatry in Patna, we use gentle, child-friendly methods so kids feel safe and supported while receiving expert care.",
    },
    {
      question: "2. How can adolescent psychiatric care help my teenager?",
      answer:
        "Adolescent psychiatric care provides guidance for teens struggling with mood swings, stress, or depression. At Manah Psychiatry in Patna, we give teenagers a safe space to express themselves and learn healthy coping skills.",
    },
    {
      question: "3. Is ADHD treatable in children?",
      answer:
        "Yes, ADHD can be managed successfully. An ADHD child specialist in Patna at Manah Psychiatry helps children improve focus, reduce hyperactivity, and build routines for success in school and at home.",
    },
    {
      question:
        "4. What symptoms can indicate that my child needs mental health treatment?",
      answer:
        "If your child is frequently sad, angry, or withdrawn, it may be time to visit a child psychiatrist in Patna. At Manah Psychiatry, we offer early support to prevent struggles from becoming bigger challenges.",
    },
    {
      question: "5. Can therapy really help children with depression?",
      answer:
        "Yes, therapy with a depression teen psychiatrist in Patna at Manah Psychiatry helps teens manage sadness, regain self-confidence, and find joy again in life.",
    },
    {
      question:
        "6. What takes place at the initial session of child psychiatry?",
      answer:
        "The first session at Manah Psychiatry in Patna is child-friendly. We talk with parents, interact gently with the child, and sometimes use games or drawings to understand feelings.",
    },
    {
      question: "7. Is medication always required for child psychiatry?",
      answer:
        "No. At Manah Psychiatry in Patna, we focus on therapy first. Medication is suggested only when truly necessary and is carefully monitored.",
    },
    {
      question: "8. How do psychiatrists help shy or non-verbal children?",
      answer:
        "At Manah Psychiatry in Patna, we use toys, drawings, and games to help children who find it hard to talk. They find it simpler to express their emotions as a result.",
    },
    {
      question:
        "9. Can my child's academic achievement be enhanced by psychiatric treatment?",
      answer:
        "Yes. Care from a child psychiatrist in Patna at Manah Psychiatry often improves focus, classroom behavior, and confidence in studies.",
    },
    {
      question: "10. Why should I choose Manah Psychiatry for my child's care?",
      answer:
        "Families trust Manah Psychiatry in Patna because we combine expert treatment with warmth and compassion. Whether it's ADHD, depression, or adolescent struggles, our team supports both children and parents with love and guidance.",
    },
  ];

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      {/* --- Hero Section --- */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Child and Adolescent Psychiatry
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Gentle care for young hearts and minds. Supporting children and
            teens through emotional challenges, fostering confidence and
            happiness for a brighter future.
          </p>
        </div>
      </section>

      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ml-4 md:ml-10 mt-12 pr-4 md:pr-10">
          {/* IMPORTANT: Changed currentService prop to match the ID in ServiceLayout.jsx */}
          <ServiceLayout currentService="child-and-adolescent-psychiatry" />
          <div className="flex-1 overflow-y-auto">
            <img
              src={img3}
              alt="Child psychiatrist interacting with a child"
              className="mt-10 rounded-lg w-full object-cover"
            />
            <h2 className="text-3xl font-bold mt-8 text-gray-900">
              Why Mental Health Care is Crucial for Children and Teens
            </h2>
            <p className="mt-4 text-gray-600">
              According to Manah Psychiatry, kids and teens require mental and
              emotional support in addition to physical care. Taking care of
              your child when they are depressed, anxious or restless is just as
              vital as taking them to the doctor when they have a fever because
              growing up is a beautiful journey but it can also bring
              challenges.
            </p>
            <p className="mt-4 text-gray-600">
              Sometimes kids or teens may feel anxious, very sad, find it hard
              to focus like in ADHD or feel stressed about school, friends or
              family. If these feelings are not cared for, they can affect
              studies, confidence and happiness.
            </p>
            <p className="mt-4 text-gray-600">
              For this reason, seeing a child psychiatrist in Patna or receiving
              adolescent psychiatric treatment in Patna might have a significant
              impact. Teens discover someone who genuinely listens without
              passing judgment and kids find a secure place to express their
              emotions and early care makes children feel lighter, happier and
              more confident about their future, whether that support comes from
              a teen depression psychiatrist in Patna or the gentle guidance of
              an ADHD child specialist in Patna.
            </p>
            <p className="mt-4 text-gray-600">
              In order to ensure that no child or teen ever feels alone, we at
              Manah work hand in hand with families, providing not just skilled
              medical care but also compassion, tolerance, and emotional
              support.
            </p>

            {/* --- Section: Common Concerns --- */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Common Behavioural and Emotional Concerns in Young Patients
              </h3>
              <p className="mt-4 text-gray-600">
                Manah Psychiatry knows that sometimes kids and teenagers go
                through feelings that are hard to explain just like the body can
                fall sick, our mind too can feel tired, worried or upset. This
                is completely normal, and with the right care, things can get
                better. Here are some of the common concerns we help with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-lg">
                    ADHD - Attention-Deficit/Hyperactivity Disorder
                  </h4>
                  <p className="text-gray-500">
                    Some kids find it hard to sit quietly, focus on studies or
                    control their energy and our ADHD child specialist in Patna
                    gently helps children manage these feelings and learn how to
                    focus better.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Depression in Teens</h4>
                  <p className="text-gray-500">
                    Sometimes, teenagers may feel very sad for a long time, lose
                    interest in things they loved or feel hopeless but our teen
                    depression psychiatrist in Patna offers a safe space for
                    them to share their feelings and feel happy again.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Anxiety and Worries</h4>
                  <p className="text-gray-500">
                    When worries feel too big and keep coming back, it can
                    affect school and friendships and Manah Psychiatry teaches
                    children and teens simple, loving ways to feel calm and safe
                    again.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Mood Changes</h4>
                  <p className="text-gray-500">
                    Growing up brings a lot of changes and sometimes emotions
                    feel too strong but our adolescent psychiatric care in Patna
                    supports teens in balancing these feelings with kindness and
                    patience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Behavioral Concerns</h4>
                  <p className="text-gray-500">
                    Sometimes kids may get very angry, stay away from friends or
                    find it hard to get along with others and we help them
                    understand their feelings and learn better ways to express
                    themselves.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-600">
                Every child and teenager is unique and at Manah Psychiatry, we
                care for each one with love, patience and warmth because no
                young heart should feel alone on this journey.
              </p>
            </section>
          </div>
        </div>

        <TherapyBenefits
          title="Benefits of Early Psychiatric Intervention for Children"
          description="Early intervention, according to Manah Psychiatry, is like holding a child's hand gently before they trip because when a child receives the appropriate kind of help, minor concerns don't become major issues and early care may facilitate learning, strengthen bonds with friends and instill confidence."
          benefits={benefitsOfEarlyIntervention}
          image={img4}
          cards={[
            {
              icon: manInHandIcon(),
              title: "Rapid Healing",
              description:
                "It is like a tiny cut, when we treat a tiny cut immediately, it heals fastly and doesn't become a large wound, children who receive help early frequently feel better and happier much faster.",
            },
            {
              icon: stethoscopeIcon(),
              title: "Holistic Development",
              description:
                "This early assistance enables them to succeed academically, maintain their happiness at home, and feel resilient in life.",
            },
          ]}
        />

        <TherapySection
          heading="What to Expect in a Child Psychiatry Session"
          subheading="Coming to meet a child psychiatrist in Patna at Manah Psychiatry is not something to be scared of. It's just like visiting a friendly doctor but instead of checking your body, we gently talk and listen to understand your thoughts and feelings."
          steps={howItWorksSteps}
          image={img1}
        />

        {/* --- Section: Why Choose Manah Psychiatry --- */}
        <section className="py-16 px-6 lg:px-20 bg-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Families Trust Us for Child and Adolescent Psychiatry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Manah Psychiatry knows that every child's mind is precious and
              deserves gentle care. We are trusted by families because we create
              a safe and loving space where children and teenagers feel heard,
              understood and cared for with kindness.
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
            We treat each child with love, respect and patience is more
            important than the experience of our doctors. Many families often
            say that visiting us is like visiting a second home, a place full of
            love, healing and hope. Every day at Manah, we support you and your
            child as they get stronger, happier, and more self-assured.
          </p>
        </section>
      </div>
      <FAQSection
        faqs={faqs}
        heading="Frequently Asked Questions about Child and Adolescent Psychiatry"
      />
      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
