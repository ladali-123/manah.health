import BlogPage from "../../Components/BlogPageComponent";
// Assuming an appropriate image exists for performance anxiety/stage fright
import img1 from "../../assets/Blogs/StageFear.webp";

export default function PerformanceAnxietyStageFrightBlog() {
  const blogData = {
    // --- Metadata ---
    title: "Overcoming Performance Anxiety & Stage Fright", // Concise title
    description:
      "Understand the causes and symptoms of performance anxiety (stage fright) and learn practical tips like preparation, relaxation, and lifestyle changes to manage it effectively.",
    image: img1, // Placeholder image reference
    date: "2024-09-25", // Placeholder date
    link: "/blog/stage-fright-performance-anxiety", // Generated link
    tags: [
      "performance anxiety",
      "stage fright",
      "anxiety",
      "public speaking",
      "coping strategies",
      "mental health",
      "confidence",
      "relaxation techniques",
    ],

    // --- Main Introduction Text ---
    text1: `Have you ever felt those tell-tale butterflies, sweaty palms, and a pounding heart when facing public speaking or performing? That's likely performance anxiety, often called stage fright. While nervousness in important moments is natural, for some, it feels like an insurmountable challenge.

Feeling judged for our performance or content naturally causes some anxiety, which most people manage. However, when this nervousness becomes disproportionate, hindering crucial life activities and limiting growth, it's time to understand and address performance anxiety. Moderate anxiety can actually enhance performance, but severe anxiety can be crippling.`,

    // --- Summary for the Callout Box ---
    crux: `Performance anxiety or stage fright is excessive nervousness before/during performance situations. While some anxiety is normal, severe cases hinder growth. Understanding causes, recognizing symptoms, and applying coping strategies like practice, relaxation, and seeking help are key to managing it.`,

    // --- Hook Section ---
    hookTitle: "Is Performance Anxiety Normal?",
    hookText: `Yes, some level of anxiety before performing is natural and can even boost focus. However, performance anxiety becomes a problem when it's overwhelming, causes significant physical symptoms, hinders your ability to perform effectively, and impacts your growth and opportunities.`,

    // --- Key Points (Derived from text) ---
    keyPoints: [
      "Definition: Excessive anxiety/nervousness before or during performance.",
      "Causes: Past bad experiences, shyness, lack of support, trauma, poor preparation, low confidence, negative self-talk.",
      "Symptoms: Racing heart, rapid breathing, dry mouth, trembling, sweaty palms, nausea, vision changes.",
      "Handling Strategy: Facing the situation is key ('enter the water to swim').",
      "Effective Tips: Knowledge, practice, preparation, building confidence, relaxation techniques, proper sleep, healthy lifestyle.",
      "When to Seek Help: If it severely impacts life, limits growth, or is associated with other mental health issues.",
    ],

    // --- Detailed Section 1: Causes and Symptoms ---
    diagnosis: {
      title: "Understanding Causes and Symptoms",
      content: [
        "- Bad past experiences related to performance.",
        "- Introverted or shy personality traits.",
        "- Less supportive childhood environment.",
        "- History of childhood trauma or abuse.",
        "- Ongoing family conflicts.",
        "- Lack of adequate preparation for the event.",
        "- Lack of self-confidence.",
        "- Negative thoughts and beliefs about oneself.",
        "- Racing heart rate or palpitations.",
        "- Fast, shallow breathing.",
        "- Dryness of the mouth.",
        "- Choking sensation or tightness in the chest/throat.",
        "- Trembling (hands, legs, lips, voice).",
        "- Cold, clammy, sweaty hands.",
        "- Feeling of 'butterflies' in the stomach or nausea.",
        "- Changes in vision (e.g., tunnel vision).",
      ],
    },

    // --- Detailed Section 2: Handling Strategies ---
    remedies: {
      title: "Ways to Handle Performance Anxiety",
      content: [
        "General Approach: The best way to combat it is to face the anxiety-provoking situation directly.",
        "Helpful Tips:",
        "- Knowledge: Understanding your anxiety reduces its distressful impact.",
        "- Practice: Repeated exposure and practice make the situation less impactful.",
        "- Know the Situation: Familiarize yourself with the venue/setting beforehand (e.g., visit the stage) to reduce uncertainty.",
        "- Build Confidence: Knowledge and practice naturally build confidence, lessening anxiety.",
        "- Relaxation Techniques: Learn to relax during tense moments (deep breathing, meditation) as tension and relaxation cannot coexist.",
        "- Prioritize Proper Sleep: Good sleep before performing calms the mind and improves focus.",
        "- Maintain a Healthy Lifestyle: A balanced diet and regular exercise support overall well-being and resilience.",
        "When to Consult an Expert:",
        "- Seek professional help if anxiety severely impacts socio-occupational life, limits growth, or halts progress.",
        "- Address potential associated mental health issues that may coexist.",
        "- Professional support offers knowledge, awareness, coping strategies, and management techniques.",
      ],
    },

    // --- Conclusion ---
    conclusion: `Performance anxiety, while common to some degree, requires attention when it becomes debilitating and hinders your potential. By understanding its roots, recognizing the physical and mental symptoms, and actively applying management strategies like thorough preparation, relaxation, and building confidence, you can learn to navigate these challenging situations more effectively.

However, if performance anxiety consistently overwhelms you and negatively impacts significant areas of your life, seeking help from a mental health professional is a crucial step. They can provide tailored strategies, address underlying issues, and support you in regaining control and pursuing your goals without being crippled by fear.`,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}
