import BlogPage from "../../Components/BlogPageComponent";
import img1 from "../../assets/Blogs/Insomnia.webp";

export default function InsomniaBlog() {
  const blogData = {
    title: "Understanding Insomnia: Causes, Symptoms, and Treatments",
    description: "A comprehensive guide to insomnia, covering its symptoms, causes, types, complications, and treatment options for improving sleep quality.",
    image: img1,
    date: "2024-08-15",
    link: "/blog/insomnia",
    tags: ["insomnia", "sleep disorder", "sleep hygiene", "treatment", "causes", "fatigue"],
    author: "Dr. Archana Singh",
    
    // Main introduction text
    text1: `Insomnia is a common and prevalent sleep disorder affecting millions globally, characterized by difficulty falling and staying asleep, or waking up too early. It can significantly impact a person’s overall health and well-being. Insomnia can be acute (short-term) or chronic (long-term), and its symptoms vary from person to person. Chronic insomnia is often caused by underlying conditions like anxiety, depression, chronic pain, or sleep apnea, whereas acute insomnia is typically triggered by stress or environmental factors like jet lag.

The symptoms of insomnia include difficulty falling asleep, waking up too early, feeling tired despite sleeping, daytime sleepiness, and mood disturbances. While it can be a minor inconvenience for some, for others, it becomes a significant issue that impacts their daily life. Fortunately, treatment options, including lifestyle changes and therapy, can help manage symptoms and improve sleep quality.`,

    // Summary for the callout box
    crux: `Insomnia is a prevalent sleep disorder that affects millions worldwide, causing disruptions in sleep and daytime functioning. Treatment options focus on improving sleep hygiene, reducing stress, and addressing underlying medical conditions.`,

    // Hook section
    hookTitle: "What is Insomnia?",
    hookText: `Insomnia is a sleep disorder characterized by trouble falling asleep, staying asleep, or waking up too early. It can be caused by various factors, including stress, medical conditions, and poor sleep habits, and it can severely impact daily functioning.`,

    // Key points for the card grid
    keyPoints: [
      "Difficulty falling asleep or staying asleep.",
      "Waking up too early and not being able to go back to sleep.",
      "Non-restorative sleep: feeling tired despite sleeping.",
      "Daytime fatigue and sleepiness affecting daily activities.",
      "Mood changes like irritability, anxiety, and depression."
    ],

    // Diagnosis section (numbered list)
    diagnosis: {
      title: "Symptoms of Insomnia",
      content: [
        "Difficulty falling asleep, even when tired.",
        "Difficulty staying asleep or waking up frequently during the night.",
        "Waking up too early in the morning and not being able to fall back asleep.",
        "Non-restorative sleep: feeling tired or unrefreshed after a full night of sleep.",
        "Daytime sleepiness, fatigue, and difficulty concentrating.",
        "Mood changes such as irritability, anxiety, or depression.",
        "Poor performance at work or school due to lack of sleep."
      ]
    },

    // Remedies section (bordered boxes)
    remedies: {
      title: "Treatments for Insomnia",
      content: [
        "Lifestyle changes: Establishing a regular sleep routine, improving sleep hygiene, avoiding caffeine and alcohol before bed, and reducing screen time.",
        "Cognitive Behavioral Therapy for Insomnia (CBT-I): A structured program that helps individuals identify and replace thoughts and behaviors that cause or worsen insomnia.",
        "Medications: Over-the-counter sleep aids or prescription medications may be prescribed temporarily to help with sleep onset or maintenance.",
        "Relaxation techniques: Practices such as meditation, deep breathing exercises, and progressive muscle relaxation can help reduce stress and improve sleep quality.",
        "Addressing underlying conditions: If insomnia is caused by another condition (e.g., depression or chronic pain), managing that condition may improve sleep."
      ]
    },

    // Conclusion
    conclusion: `Insomnia is a common yet disruptive sleep disorder that affects many people at some point in their lives. While the symptoms can vary, the impact of insomnia on quality of life is significant. It is important to identify the root cause of insomnia to determine the most effective treatment. Lifestyle changes, therapy, and, when necessary, medications can help individuals manage insomnia and improve their overall sleep quality.

If you are experiencing symptoms of insomnia, it is crucial to seek professional help. With proper treatment and lifestyle adjustments, most people can find relief and regain a healthy sleep pattern, improving their overall well-being and daily functioning.`
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}

