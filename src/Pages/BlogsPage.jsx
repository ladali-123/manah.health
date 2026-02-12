import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BlogSection from "../Components/BlogSection";
import img1 from "../assets/Blogs/BlogsCarousel.webp";
import img2 from "../assets/Blogs/SadWomanOnChair.webp";
import img3 from "../assets/Blogs/ManHeadTree.webp";
import img4 from "../assets/Blogs/InsideGlass.webp";
import img5 from "../assets/Blogs/Paranoia.webp";
import img6 from "../assets/Blogs/CBT.webp";
import img7 from "../assets/Blogs/Bipolar.webp";
import img8 from "../assets/Blogs/Schizophrenia.webp";
import img9 from "../assets/Blogs/Parkinsons.webp";
import img10 from "../assets/Blogs/Insomnia.webp";
import img11 from "../assets/Blogs/Stress.webp";
import img12 from "../assets/Blogs/PerformanceAnxiety.webp";
import img13 from "../assets/Blogs/SleepDisorder.webp";
import img14 from "../assets/Blogs/ExamStress.webp";
import img15 from "../assets/Blogs/FacingFailures.webp";
import img16 from "../assets/Blogs/DealingFailure.webp";
import img17 from "../assets/Blogs/SleepAndHealth.webp";
import img18 from "../assets/Blogs/WomanHealth.webp";
import img19 from "../assets/Blogs/SuicidePrevention.webp";
import img20 from "../assets/Blogs/SuicideEffect.webp";
import img21 from "../assets/Blogs/SocialMediaAddiction.webp";
import img22 from "../assets/Blogs/Resilience.webp";
import img23 from "../assets/Blogs/StageFear.webp";
import img24 from "../assets/Blogs/ChildrenMentalHealth.webp";
import img25 from "../assets/Blogs/PsychotropicMedicines.webp";
import img26 from "../assets/Blogs/MentalHealthBlog.webp";
import gameadd from "../assets/gameadd.jpg"; // अपना image path डालें

export default function BlogsPage() {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [displayMode, setDisplayMode] = useState("all"); // "all" or "categories"
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Define main categories and their associated tags
  const categoryMapping = {
    "Mental Health Disorders": [
      "anxiety",
      "mental illness",
      "paranoia",
      "bipolar disorder",
      "schizophrenia",
      "psychotic disorders",
      "mental disorders",
      "children's mental health",
    ],
    "Sleep & Physical Wellness": [
      "insomnia",
      "sleep disorders",
      "sleep quality",
      "sleep",
      "physical health",
      "health",
      "neurological disorders",
      "parkinson's disease",
    ],
    "Stress & Resilience": [
      "stress",
      "stress management",
      "resilience",
      "mental resilience",
      "exam stress",
      "performance anxiety",
      "stage fright",
      "failure",
      "setbacks",
      "coping strategies",
      "bouncing back",
      "growth",
    ],
    "Therapy & Treatment": [
      "treatment",
      "therapy",
      "CBT",
      "prevention programs",
      "intervention",
      "support",
    ],
    "Social & Lifestyle": [
      "social isolation",
      "loneliness",
      "social media addiction",
      "teens",
      "adolescents",
      "women's mental health",
      "life stages",
      "suicide prevention",
      "suicide",
      "impact",
      "mental health awareness",
      "personal growth",
      "well-being",
    ],
  };

  const blogs = [
    {
      title: "Online Gaming Addiction: जब मोबाइल गेम बच्चों की ज़िंदगी पर भारी पड़ने लगें",
      description:
        "Online gaming addiction के प्रभाव, warning signs, और parents के लिए effective steps।",
      image: gameadd,
      link: "/blog/online-gaming-addiction-2026",
      tags: ["gaming", "mental health", "children"],
    },
    {
      title:
        "From Anxiety to Calm: How Manah’s Holistic Approach Helps Patients Heal with Love and Science",
      description:
        "Explore Manah Psychiatry's holistic approach to anxiety in Patna, blending science-backed treatment with heart-centered compassion to help patients move from fear to confidence.",
      image: img12, // Assuming this is imported
      link: "/blog/from-anxiety-to-calm-at-manah",
      tags: [
        "anxiety treatment Patna",
        "holistic mental health",
        "best psychiatrist in Patna online",
        "mental health clinic Patna",
        "overcoming fear",
        "science and compassion",
        "Manah Psychiatry",
        "anxiety relief habits",
      ],
    },
    {
      title:
        "Child, Teen & Adult Care Under One Roof: How Manah Psychiatry Supports Every Age with Kindness",
      description:
        "Learn how Manah Psychiatry in Patna offers specialized care for children, teens, and adults under one roof, treating ADHD, depression, and anxiety with kindness and scientific expertise.",
      image: img16, // Assuming this is imported
      link: "/blog/care-for-all-ages-manah",
      tags: [
        "child psychiatrist in Patna",
        "adolescent psychiatric care",
        "ADHD neuropsychiatry",
        "depression psychiatrist Patna",
        "online psychiatry services Patna",
        "psychiatric medication management",
        "family counseling",
        "mental health for all ages",
      ],
    },
    {
      title:
        "Mental Health Made Safer: How Depression Medication Oversight in Patna Builds Trust and Hope",
      description:
        "Discover how Manah Psychiatry in Patna provides careful depression medication oversight, building trust and fostering hope.",
      image: img26, // Assuming 'imgMentalHealthSafer' is imported from "../../assets/Blogs/mental_health_safer.webp"
      link: "/blog/depression-medication-oversight-patna",
      tags: [
        "depression medication oversight Patna",
        "psychiatric medication management Patna",
        "psychiatric medication monitoring Patna",
        "mental health Patna",
        "depression treatment",
        "anxiety treatment",
        "Manah Psychiatry",
        "mental well-being",
        "recovery support",
        "therapy and medication",
        "family support mental health",
        "trust and hope in mental health", // Added a more specific tag
      ],
    },
    {
      title:
        "Psychotropic Medicines Explained: How Psychiatric Medication Management in Patna Supports Recovery",
      description:
        "Explore how psychotropic medicines help balance brain chemicals, and how psychiatric medication management at Manah Psychiatry in Patna provides gentle, supervised care for recovery from sadness, stress, and anxiety. Learn about monitoring, therapy integration, and the importance of family support in your healing journey.",
      image: img25,
      link: "/blog/psychotropic-medicines-management-patna",
      tags: [
        "psychotropic medicines explained",
        "psychiatric medication management Patna",
        "mental health Patna",
        "depression medication oversight",
        "anxiety treatment",
        "Manah Psychiatry",
        "mental well-being",
        "recovery support",
        "psychiatric medication monitoring Patna",
        "psychotropic drugs", // Added for broader keywords
        "brain health",
        "emotional balance",
      ],
    },
    {
      title:
        "Child Psychiatry Explained: When to See a Depression or Anxiety Psychiatrist in Patna",
      description:
        "Explore child psychiatry, its importance, and how early consultation with specialists like child psychiatrists, adolescent psychiatric care providers, ADHD child specialists, and depression teen psychiatrists in Patna can ensure your child's mental well-being.",
      image: img21,
      link: "/blog/child-psychiatry-explanation",
      tags: [
        "child psychiatry",
        "child mental health",
        "adolescent psychiatric care",
        "ADHD child specialist Patna",
        "depression teen psychiatrist Patna",
        "anxiety in children",
        "depression in children",
        "Manah Psychiatry",
        "mental well-being",
        "Patna",
        "early intervention",
        "breaking stigma",
      ],
    },
    {
      title: "Early Signs of Mental Disorders in Children",
      description:
        "Recognizing the early signs of mental disorders in children can lead to early intervention and better outcomes.",
      image: img24,
      link: "/blog/early-psychiatrist-evaluation",
      tags: [
        "children's mental health",
        "mental disorders",
        "early signs",
        "intervention",
      ],
    },
    {
      title: "What are Anxiety Disorders? Let's Discover",
      description:
        "An overview of anxiety disorders, their symptoms, and available treatment options.",
      image: img2,
      link: "/blog/anxiety-disorders-2024",
      tags: ["anxiety", "mental health", "treatment"],
    },
    {
      title: "What is Mental Illness – Important Types & Treatments",
      description:
        "Explore the different types of mental illness and the treatments available for each.",
      image: img3,
      link: "/blog/mental-illness-2024",
      tags: ["mental health", "treatment", "mental illness"],
    },
    {
      title: "Coping with Social Isolation and Loneliness – What to know?",
      description:
        "Learn strategies for managing and overcoming social isolation and loneliness.",
      image: img4,
      link: "/blog/social-isolation-loneliness",
      tags: ["social isolation", "loneliness", "mental health"],
    },
    {
      title: "What is Paranoia? Causes, Symptoms, and Treatments",
      description:
        "Understand the causes and symptoms of paranoia, and how it can be treated effectively.",
      image: img5,
      link: "/blog/paranoia",
      tags: ["paranoia", "mental health", "treatment"],
    },
    {
      title: "Learning About Cognitive Behavioral Therapy (CBT)",
      description:
        "An introduction to CBT, its effectiveness, and how it helps individuals manage various mental health challenges.",
      image: img6,
      link: "/blog/cognitive-behavioral-therapy",
      tags: ["CBT", "therapy", "mental health"],
    },
    {
      title: "What is Bipolar Disorder? Its Impact",
      description:
        "A detailed look at bipolar disorder, its symptoms, and the impact it has on individuals and their loved ones.",
      image: img7,
      link: "/blog/bipolar-disorder",
      tags: ["bipolar disorder", "mental health", "mood disorders", "impact"],
    },
    {
      title: "A Complete Guide on Schizophrenia",
      description:
        "This guide provides insights into schizophrenia, its symptoms, causes, and treatment options.",
      image: img8,
      link: "/blog/schizophrenia",
      tags: [
        "schizophrenia",
        "mental health",
        "psychotic disorders",
        "treatment",
      ],
    },
    {
      title: "Parkinson's Disease – Symptoms, Causes, And Treatments",
      description:
        "Learn about Parkinson's disease, its symptoms, causes, and the treatments that can help manage the condition.",
      image: img9,
      link: "/blog/parkinsons-disease",
      tags: [
        "parkinson's disease",
        "neurological disorders",
        "symptoms",
        "treatment",
      ],
    },
    {
      title: "Insomnia – Symptoms & Causes",
      description:
        "A comprehensive guide on insomnia, its symptoms, and the common causes behind it.",
      image: img10,
      link: "/blog/insomnia",
      tags: ["insomnia", "sleep disorders", "mental health", "sleep quality"],
    },
    {
      title: "How Stress Affects Health",
      description:
        "Learn about the impact of stress on both physical and mental health, and strategies to manage it.",
      image: img11,
      link: "/blog/stress-affects-health",
      tags: ["stress", "mental health", "physical health", "well-being"],
    },
    {
      title: "Three Secrets to Beat Performance Anxiety",
      description:
        "Discover proven methods to overcome performance anxiety and boost confidence in any situation.",
      image: img12,
      link: "/blog/beat-performance-anxiety",
      tags: ["performance anxiety", "mental health", "stress", "confidence"],
    },
    {
      title: "What is Sleep Disorder and How It Can Be Treated",
      description:
        "Understand the different types of sleep disorders and the available treatment options to improve sleep quality.",
      image: img13,
      link: "/blog/sleep-disorder-treatment",
      tags: ["sleep disorder", "sleep quality", "mental health", "treatment"],
    },
    {
      title: "How to Overcome Exam Stress?",
      description:
        "Tips and techniques to reduce exam stress and perform at your best when it matters most.",
      image: img14,
      link: "/blog/overcome-exam-stress",
      tags: ["exam stress", "study tips", "stress management", "performance"],
    },
    {
      title: "How to Face Failures?",
      description:
        "How to face failures and turn setbacks into opportunities for growth.",
      image: img15,
      link: "/blog/face-failures",
      tags: ["failure", "mental resilience", "growth", "setbacks"],
    },
    {
      title: "How to Deal with Failures",
      description:
        "A guide to coping with failures and bouncing back stronger from setbacks.",
      image: img16,
      link: "/blog/deal-with-failures",
      tags: [
        "failure",
        "coping strategies",
        "mental resilience",
        "bouncing back",
      ],
    },
    {
      title: "Sleep and Health",
      description:
        "Explore the connection between sleep and overall health, and how improving sleep can enhance your well-being.",
      image: img17,
      link: "/blog/sleep-and-health",
      tags: ["sleep", "health", "well-being", "mental health"],
    },
    {
      title: "Women's Mental Health Across the Lifespan",
      description:
        "Insights into how women's mental health changes across different life stages and the strategies to support mental well-being.",
      image: img18,
      link: "/blog/womens-mental-health",
      tags: [
        "women's mental health",
        "mental health",
        "life stages",
        "well-being",
      ],
    },
    {
      title: "Is Suicide Preventable?",
      description:
        "An in-depth look at how suicide prevention programs and mental health awareness can help save lives.",
      image: img19,
      link: "/blog/suicide-prevention",
      tags: [
        "suicide prevention",
        "mental health awareness",
        "suicide",
        "prevention programs",
      ],
    },
    {
      title: "Suicide and Its Impact",
      description:
        "Understanding the impact of suicide on families and communities, and how to support those affected.",
      image: img20,
      link: "/blog/suicide-impact",
      tags: ["suicide", "impact", "mental health", "support"],
    },
    {
      title: "Social Media Addiction in Teens, Adolescents, and Young Adults",
      description:
        "Explore the dangers of social media addiction and how it affects mental health in younger generations.",
      image: img21,
      link: "/blog/social-media-addiction",
      tags: ["social media addiction", "mental health", "teens", "adolescents"],
    },
    {
      title:
        "Understanding Resilience and Ways to Improve It for Better Mental Health",
      description:
        "Learn how building resilience can improve mental health and overall life satisfaction.",
      image: img22,
      link: "/blog/building-resilience",
      tags: ["resilience", "mental health", "personal growth", "well-being"],
    },
    {
      title: "How to Beat Performance Anxiety/Stage Fright",
      description:
        "Techniques to conquer stage fright and performance anxiety, allowing you to perform with confidence.",
      image: img23,
      link: "/blog/stage-fright-performance-anxiety",
      tags: [
        "performance anxiety",
        "stage fright",
        "confidence",
        "mental health",
      ],
    },
    {
      title: "Early Signs of Mental Disorders in Children",
      description:
        "Recognizing the early signs of mental disorders in children can lead to early intervention and better outcomes.",
      image: img24,
      link: "/blog/mental-disorders-children",
      tags: [
        "children's mental health",
        "mental disorders",
        "early signs",
        "intervention",
      ],
    },
  ];

  // Map each blog to its main category
  const getBlogMainCategory = (blog) => {
    for (const [category, tags] of Object.entries(categoryMapping)) {
      if (blog.tags.some((tag) => tags.includes(tag))) {
        return category;
      }
    }
    return "Other"; // Fallback category
  };

  // Assign main category to each blog
  const blogsWithMainCategory = blogs.map((blog) => ({
    ...blog,
    mainCategory: getBlogMainCategory(blog),
  }));

  // Get all main categories
  const mainCategories = Object.keys(categoryMapping);

  // Filter blogs based on search query and active category
  useEffect(() => {
    let result = [...blogsWithMainCategory];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((blog) => blog.mainCategory === activeCategory);
    }

    setFilteredBlogs(result);
    setActivePage(1); // Reset to first page when filtering changes
  }, [searchQuery, activeCategory]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
    setActiveCategory("all");
  };

  const getPaginatedBlogs = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBlogs.slice(startIndex, endIndex);
  };

  // Group blogs by category for category view
  const getBlogsByCategory = () => {
    const blogsByCategory = {};

    mainCategories.forEach((category) => {
      const categoryBlogs = blogsWithMainCategory.filter(
        (blog) => blog.mainCategory === category
      );
      if (categoryBlogs.length > 0) {
        blogsByCategory[category] = categoryBlogs.slice(0, 4); // Show only 4 blogs per category
      }
    });

    return blogsByCategory;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredBlogs(blogsWithMainCategory); // Initialize with all blogs
  }, []);

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Mental Health Disorders":
        return "-";
      case "Sleep & Physical Wellness":
        return "-";
      case "Stress & Resilience":
        return "-";
      case "Therapy & Treatment":
        return "-";
      case "Social & Lifestyle":
        return "-";
      default:
        return "-";
    }
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />

      {/* Hero Section with Search */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Read our blogs and get enlightened
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Learn how we transform your life through therapy and wellness.
          </p>

          {/* Enhanced Search Bar */}
          <div
            className={`w-full max-w-md transition-all duration-300 ${
              isSearchFocused ? "scale-105" : ""
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs by title, description or tags..."
                className="w-full p-4 pl-12 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-primary)]"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setSearchQuery("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Display Mode Toggle - Enhanced UI */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              displayMode === "all"
                ? "bg-[var(--color-button-primary)] text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleDisplayModeChange("all")}
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              All Blogs
            </span>
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              displayMode === "categories"
                ? "bg-[var(--color-button-primary)] text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleDisplayModeChange("categories")}
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Browse by Categories
            </span>
          </button>
        </div>
      </div>

      {displayMode === "all" ? (
        <>
          {/* Category Filter - Consolidated Categories */}
          <div className="container mx-auto px-4 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-2 lg:gap-4">
              <button
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-[var(--color-button-primary)] text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => handleCategoryChange("all")}
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">-</span>
                  All Categories
                </span>
              </button>
              {mainCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[var(--color-button-primary)] text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">{getCategoryIcon(category)}</span>
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count with Animation */}
          <div className="container mx-auto px-4 mb-6">
            <div className="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {filteredBlogs.length === 0
                ? "No blogs found"
                : `Found ${filteredBlogs.length} blog${
                    filteredBlogs.length !== 1 ? "s" : ""
                  }`}
            </div>
          </div>

          {/* Enhanced Blog Section */}
          <div className="container mx-auto px-4">
            {filteredBlogs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No blogs found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  className="px-4 py-2 bg-[var(--color-button-primary)] text-white rounded-md hover:bg-[var(--color-button-primary-hover)]"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <BlogSection blogs={getPaginatedBlogs()} isHomePage={false} />
            )}
          </div>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 my-12">
              <button
                onClick={() => handlePageChange(Math.max(1, activePage - 1))}
                disabled={activePage === 1}
                className={`px-4 py-2 rounded-md flex items-center ${
                  activePage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                // Show at most 5 page numbers centered around current page
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= activePage - 1 && pageNumber <= activePage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      className={`w-10 h-10 rounded-full font-medium transition-all duration-200 ${
                        activePage === pageNumber
                          ? "bg-[var(--color-button-primary)] text-white shadow-md transform scale-110"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === activePage - 2 ||
                  pageNumber === activePage + 2
                ) {
                  return (
                    <span key={pageNumber} className="px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, activePage + 1))
                }
                disabled={activePage === totalPages}
                className={`px-4 py-2 rounded-md flex items-center ${
                  activePage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        // Enhanced Categorical View
        <div className="container mx-auto px-4 py-8">
          {Object.entries(getBlogsByCategory()).map(
            ([category, categoryBlogs]) => (
              <div
                key={category}
                className="mb-16 bg-gray-50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <span className="mr-3 text-3xl">
                      {getCategoryIcon(category)}
                    </span>
                    {category}
                  </h2>
                  {/* <a
                    href="#"
                    className="flex items-center text-[var(--color-button-primary)] hover:underline font-medium transition-all duration-200 hover:translate-x-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisplayMode("all");
                      setActiveCategory(category);
                    }}
                  >
                    View all
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>*/}
                </div>
                <BlogSection blogs={categoryBlogs} isHomePage={false} />
              </div>
            )
          )}
        </div>
      )}

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
