import BlogPage from "../../Components/BlogPageComponent";
import img1 from "../../assets/Blogs/SadWomanOnChair.webp";

export default function AnxietyDisordersBlog() {
  const blogData = {
    title: "What are Anxiety Disorders? Let’s Discover – 2024",
    description:
      "An overview of anxiety disorders, their symptoms, diagnosis, and available treatment options.",
    date: "2024-12-30",
    image: img1,
    link: "/blog/anxiety-disorders-2024",
    tags: ["anxiety", "mental health", "treatment"],

    text1: `
      <h3><strong>1. What Are Anxiety Disorders?</strong></h3>

      <p>
        <strong>Anxiety</strong> is one of the most common mental health challenges faced by people 
      
        today.
        It can cause racing thoughts, a pounding heart, restlessness, and constant fear.
        While occasional anxiety is normal, anxiety disorders are far more intense and persistent.
      </p>

      <p>
        <strong>Anxiety disorders</strong> are mental health conditions where a person experiences
        overwhelming worry, fear, or panic on a regular basis — even in the absence of real danger.
        These feelings can interfere with everyday activities and decision-making.
      </p>

      <p>
        Common types of anxiety disorders include
        <strong>generalized anxiety disorder</strong>,
        <strong>social anxiety disorder</strong>,
        <strong>specific phobias</strong>,
        <strong>agoraphobia</strong>, and
        <strong>panic disorder</strong>.
        In many individuals, anxiety may also coexist with depression.
      </p>

      <p>
        Feeling nervous from time to time is natural. However, anxiety disorders go beyond normal stress
        and create persistent fear that affects work, education, relationships, and overall quality
         of life.
      </p>
    `,

    crux: `
      <p>
        <strong>
          Anxiety disorders involve ongoing fear and excessive worry that interfere with daily life,
          emotional balance, and overall well-being.
        </strong>
      </p>
    `,

    hookTitle: "What are Some of the Common Symptoms of Anxiety Disorders?",
    hookText: `
      <p>
        Anxiety disorders affect both the <strong>mind and body</strong>.
        Individuals may experience constant fear, intrusive thoughts,
        or sudden panic attacks that disrupt daily functioning.
      </p>
    `,

    // KEY POINTS
    keyPoints: [
      "<strong>Panic, fear, and constant uneasiness</strong>",
      "<strong>Feelings of impending doom or danger</strong>",
      "<strong>Difficulty falling or staying asleep</strong>",
      "<strong>Inability to remain calm or relaxed</strong>",
      "<strong>Shortness of breath</strong>",
      "<strong>Heart palpitations or rapid heartbeat</strong>",
      "<strong>Dry mouth</strong>",
      "<strong>Nausea or stomach discomfort</strong>",
      "<strong>Muscle tension or body aches</strong>",
      "<strong>Dizziness or light-headedness</strong>",
      "<strong>Persistent rumination or repetitive negative thoughts</strong>",
      "<strong>Difficulty concentrating or focusing</strong>",
      "<strong>Avoidance of feared places or situations</strong>",
    ],

    diagnosis: {
      title: "Diagnosing Anxiety Disorders",
      content: [
        "Doctors evaluate emotional symptoms, physical health, and personal experiences.",
        "Medical tests may be conducted to rule out physical conditions that mimic anxiety.",
        "If no physical cause is found, referral to a psychiatrist or psychologist is recommended.",
        "Diagnosis depends on symptom duration, frequency, and severity.",
        "Healthcare providers assess how anxiety affects work, school, and relationships.",
        "Routine anxiety screening is recommended for children and adolescents aged 8–18.",
      ],
    },

    remedies: {
      title: "Remedies for Anxiety Disorders",
      content: [
        "<strong>Medications</strong> such as antidepressants or anti-anxiety drugs help regulate symptoms.",
        "<strong>Counseling or therapy</strong> provides emotional support and guidance.",
        "<strong>Psychotherapy</strong> helps individuals understand thoughts and behavior patterns.",
        "<strong>Cognitive Behavioral Therapy (CBT)</strong> teaches practical coping techniques.",
        "Early treatment significantly improves recovery and long-term well-being.",
      ],
    },

    // CONCLUSION
    conclusion: `
      <p>
        Living with anxiety can feel overwhelming, but effective help is available.
        Anxiety disorders are common, real, and treatable mental health conditions.
      </p>

      <p>
        Seeking professional support can restore confidence, emotional stability,
        and quality of life. Addressing anxiety early helps prevent long-term impact
        on mental and physical health.
      </p>

      <p>
        <strong>Sound mental health is essential for sound physical health.</strong>
      </p>
    `,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}
