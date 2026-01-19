import BlogPage from "../../Components/BlogPageComponent";
// Assuming an appropriate image exists for performance anxiety
import img1 from "../../assets/Blogs/PerformanceAnxiety.webp";

export default function PerformanceAnxietyBlog() {
  const blogData = {
    // --- Metadata ---
    title: "Understanding and Overcoming Performance Anxiety",
    description:
      "Explore what performance anxiety is, its common causes including the brain's role, specific types like stage fright and sexual performance anxiety, and effective self-help and professional strategies to manage it.",
    image: img1, // Placeholder image reference
    date: "2025-03-15", // Placeholder date
    link: "/blog/beat-performance-anxiety", // Generated link
    tags: [
      "performance anxiety",
      "anxiety",
      "stage fright",
      "sexual performance anxiety",
      "test anxiety",
      "coping strategies",
      "mental health",
      "therapy",
      "self-help",
      "PFC", // Prefrontal Cortex
    ],

    // --- Main Introduction Text ---
    text1: `When a favorite athlete falters in a crucial moment, we might call it "choking," but a more accurate term is often a manifestation of performance anxiety. The key element is anxiety itself. While anxiety is a necessary human survival mechanism, it can become dysfunctional and develop into a diagnosable disorder when it significantly interferes with life.

Performance anxiety specifically refers to excessive anxiety experienced before and during a triggering event. This isn't limited to sports; it can occur in various situations, including having sex, taking exams, public speaking, or job interviews. Regardless of the context, overwhelming anxiety is the common thread. Understanding its roots and how to manage it is crucial for well-being.`,

    // --- Summary for the Callout Box ---
    crux: `Performance anxiety is excessive worry before or during specific events, impairing one's ability to perform. It often stems from the brain's prefrontal cortex becoming overactive under stress, creating a self-fulfilling cycle. Effective management involves self-help techniques and often professional therapy.`,

    // --- Hook Section ---
    hookTitle: "Why Does Performance Anxiety Happen?",
    hookText: `When aiming to perform well, anxiety can interfere by causing obsessive focus on details. This can overwhelm the prefrontal cortex (PFC), the brain area directing actions. Intense anxiety makes the PFC overactive, hindering even routine tasks and creating a feeling that failure is inevitable.`,

    // --- Key Points (Core Concepts) for Card Grid ---
    keyPoints: [
      "It's excessive anxiety tied to specific performance situations (sports, sex, tests, public speaking).",
      "Anxiety can overactivate the brain's prefrontal cortex (PFC), impairing performance.",
      "It often creates a self-fulfilling prophecy: anxiety -> poor performance -> reinforces belief -> more anxiety.",
      "Common types include sexual performance anxiety and stage fright.",
      "Management includes self-help (relaxation, self-talk, preparation) and professional therapy.",
    ],

    // --- Detailed Section 1 (Causes & Cycle) ---
    diagnosis: { // Renamed from 'diagnosis' as it describes causes/mechanism
      title: "Causes and Cycle of Performance Anxiety",
      content: [
        "Interference with Focus: Anxiety causes individuals to obsess over event details, potentially confusing the prefrontal cortex (PFC), which directs the performance process.",
        "PFC Overactivity: As anxiety intensifies, the PFC can become overactive, making routine tasks or actions challenging.",
        "Psychological Threat & Cycle: This situation often feels like a self-fulfilling prophecy:",
        "1. You experience anxiety about a specific situation or event.",
        "2. This feeling activates your brain's threat response.",
        "3. Once activated, your ability to perform well becomes impaired.",
        "4. You may perceive this impaired performance as proof of inadequacy.",
        "5. Consequently, future stressful situations trigger more anxiety based on the belief you can't perform effectively.",
      ],
    },

    // --- Detailed Section 2 (Strategies) ---
    remedies: { // Renamed from 'remedies' to reflect strategies/tips
      title: "Strategies to Overcome Performance Anxiety",
      content: [
        "Sexual Performance Tips: Address stigmas and negative body image. Engage in open communication with your partner, be open to exploring various sexual possibilities, focus on physical sensations (be present), and be patient with yourself.",
        "Stage Fright Management: Symptoms (sweaty palms, trembling, rapid heart rate) mimic mortal danger. Suggestions include: regular self-care routines (especially pre-event), visualizing success, limiting stimulants (coffee, alcohol), practicing without obsessing, and using breathing exercises.",
        "Mastering Inner Dialogue (Especially for Stage Fright): Recognize that anxiety can be deceptive. Focus on your internal self-talk. Quieting the negative inner voice and replacing it with positive affirmations is critical.",
        "General Performance Anxiety (Athletics, Exams, Interviews): Techniques often overlap with Generalized Anxiety Disorder (GAD) management. Key strategies include relaxation techniques (like deep breathing, progressive muscle relaxation), consistent self-care practices, and cultivating positive self-talk.",
        "Seeking Professional Help: If anxiety is disruptive, schedule an appointment with a qualified mental health professional. Anxiety disorders are common and treatable. Therapy (like exposure therapy) helps uncover root causes and develop coping mechanisms. Don't endure it alone; professional help aids in regaining control.",
      ],
    },

    // --- Conclusion ---
    conclusion: `Performance anxiety, whether situational or linked to a generalized anxiety disorder, can be effectively managed and overcome. It doesn't have to control your life.

Strategies like engaging in exposure therapy under professional guidance, regularly practicing relaxation techniques, consciously using positive self-talk to counter negative thoughts, and seeking support from mental health professionals are all proven methods. By employing these approaches, individuals can significantly reduce the impact of performance anxiety and regain confidence in triggering situations. If performance anxiety disrupts your life, reaching out for professional collaboration is a crucial step towards regaining control.`,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}
