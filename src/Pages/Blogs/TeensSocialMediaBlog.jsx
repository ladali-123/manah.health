import BlogPage from "../../Components/BlogPageComponent";
// Assuming an appropriate image exists for social media addiction
import img1 from "../../assets/Blogs/SocialMediaAddiction.webp";

export default function SocialMediaAddictionBlog() {
  const blogData = {
    // --- Metadata ---
    title: "Understanding Social Media Addiction", // Concise title
    description:
      "Explore social media addiction, its prevalence among youth, positive and negative impacts, signs of addiction (like FOMO), associated physical/mental health costs, and management strategies.",
    image: img1, // Placeholder image reference
    date: "2024-09-05", // Placeholder date
    link: "/blog/social-media-addiction", // Generated link
    tags: [
      "social media addiction",
      "internet addiction",
      "FOMO", // Fear Of Missing Out
      "NOMOPHOBIA", // No Mobile Phone Phobia
      "mental health",
      "adolescents",
      "young adults",
      "digital well-being",
    ],

    // --- Main Introduction Text ---
    text1: `Look around, and you'll likely see many people absorbed in their mobile phones, often unaware of their surroundings. A large portion of these users are teens and young adults, constantly connected – talking, chatting, or scrolling through social media. With billions using platforms like Facebook, YouTube, WhatsApp, and Instagram for hours daily, it's crucial to examine the effects.

Is social media inherently good or bad? Is addiction a reality or just hype? Does it enhance life or negatively impact it? Understanding the nature and consequences of our relationship with social media is essential in today's world.`,

    // --- Summary for the Callout Box ---
    crux: `Social media addiction involves an uncontrollable urge to use platforms, leading to excessive time spent online, anxiety when disconnected (FOMO), and impairment in daily life. While potentially offering social support, it poses significant risks to physical, mental, and social well-being, especially for youth.`,

    // --- Hook Section ---
    hookTitle: "What Defines Social Media Addiction?",
    hookText: `It's characterized by an irresistible urge to use social media, leading to increased usage time and significant distress or craving when access is denied. This often manifests as FOMO (Fear Of Missing Out) – a constant concern about missing rewarding experiences others might be having online. This dependency ultimately hinders important social, educational, and occupational functioning.`,

    // --- Key Points (Derived from text) ---
    keyPoints: [
      "Definition: Uncontrollable urge to use social media, impacting daily life.",
      "Prevalence: Billions use social media globally; addiction affects millions, especially youth.",
      "Potential Positives: Can offer social support, self-expression, identity exploration.",
      "Identification Signs: Increased use (tolerance), distress when offline (withdrawal), loss of control, FOMO, NOMOPHOBIA.",
      "Costs: Impacts physical health (sedentary lifestyle, pain), mental health (isolation, depression, anxiety), and social functioning (conflicts, academic/job decline).",
      "Management: Requires education, setting limits, productive activities during abstinence, addressing underlying issues, lifestyle changes.",
    ],

    // --- Detailed Section 1: Understanding the Impact and Addiction ---
    diagnosis: {
      title: "Impact, Prevalence, and Identifying Addiction",
      content: [
        " Global social media users: ~4.48 billion.",
        " Average daily use: ~2.5 hours.",
        " Estimated ~210 million worldwide struggle with internet/social media addiction.",
        " India has approximately 450 million social media users.", // Note: This number seems extremely low for India based on global stats, taken directly from text. Might need verification if used elsewhere. Updated from 4.5 to 450, 
        " Popular platforms: Facebook, YouTube, WhatsApp, Instagram, Snapchat, Twitter, LinkedIn, etc.",
        " Taps into fundamental human needs for connection.",
        " Offers possibilities for social support and self-expression.",
        " Can be a tool for identity development and exploration, especially for youth.",
        " Facilitates peer engagement and aspirational development.",
        " Allows connection beyond physical boundaries.",
        " Can help individuals struggling with real-world self-acceptance find a space to explore/reveal themselves, boosting self-esteem.",
        " Mood alterations/numbing effects from excessive use.",
        " Tolerance: Needing to spend more and more time on social media.",
        " Withdrawal Symptoms: Distress, restlessness, fear of missing out (FOMO) when unable to use.",
        " Loss of Control: Difficulty limiting use despite negative consequences.",
        " Conflicts: Increased arguments with family/peers regarding usage.",
        " Impairment: Neglect of work, education, or other important life areas.",
        " NOMOPHOBIA: Excessive fear of being without one's mobile phone/connectivity.",
      ],
    },

    // --- Detailed Section 2: Costs and Management ---
    remedies: {
      title: "The Costs of Addiction and Management Strategies",
      content: [
        "Physical Costs/Symptoms:",
        "- Sedentary lifestyle, lack of physical activity.",
        "- Obesity and metabolic issues.",
        "- Muscular weakness, pain, fatigue.",
        "- Potential nutritional deficiencies.",
        "- Defective posture, bone/joint problems.",
        "Psychological Costs/Symptoms:",
        "- Social isolation, aloofness, loneliness.",
        "- Identity problems.",
        "- Increased stress and tension.",
        "- Poor attention and concentration.",
        "- Anxiety, Depression, Panic Disorder.",
        "- Irritability and anger issues.",
        "- Suicidal thoughts and ideations.",
        "Social Costs/Problems:",
        "- Conflict with parents, family members, teachers, peers.",
        "- Deterioration in academic or occupational performance.",
        "- Poor tolerance.",
        "- Risk of cyberbullying or engaging in risky online relationships.",
        "Management Strategies:",
        "- Education: Informing patient/family about impacts.",
        "- Individual Responsibility: Emphasizing personal accountability for health.",
        "- Gradual Abstinence: Strictly limiting usage duration, gradually increasing offline time.",
        "- Productive Alternatives: Encouraging meaningful activities during abstinence.",
        "- Lifestyle Modifications: Promoting physical activity, real-world socialization, adequate sleep, focus on education/work.",
        "- Addressing Underlying Issues: Identifying and rectifying psychological problems contributing to addiction.",
        "- Goal: Developing maturity and self-discipline in social media use.",
        "- Seeking Expert Help: Consulting professionals for better understanding and support if addiction disrupts life.",
      ],
    },

    // --- Conclusion ---
    conclusion: `Internet and social media addiction, particularly among adolescents and young adults, is not mere hype – it's a pressing reality of our time. Recognizing the problem requires greater education and awareness. The stakes are incredibly high, as excessive use negatively impacts the physical, mental, and social well-being of our youth, potentially hindering their future.

We can combat this by fostering stronger real-world connections, being more aware and vigilant, and offering support. It's crucial to implement strategies that encourage responsible use and address underlying issues. If social media use becomes uncontrollable and detrimental, seeking expert help from a mental health professional is a vital step towards regaining balance and protecting well-being.`,
  };

  return (
    <div>
      <BlogPage blogData={blogData} />
    </div>
  );
}

