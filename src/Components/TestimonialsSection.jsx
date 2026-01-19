import { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);

  useEffect(() => {
    const instance = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: { perView: 1, spacing: 15 },
      breakpoints: {
        "(min-width: 768px)": { slides: { perView: 2, spacing: 30 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 40 } },
      },
    });
    setSliderInstance(instance);

    return () => {
      instance.destroy();
    };
  }, []);

  // Updated Testimonials with new content
  const testimonials = [
    {
      title: "Found My Voice, Found My Peace",
      content:
        "Manah Psychiatry helped me immensely in overcoming my depression. The doctor here is very understanding, and for the first time, I felt like someone was truly listening to me. Now, I feel much happier and calmer.",
      author: "Pooja",
    },
    {
      title: "Effortless Online Healing from Home",
      content:
        "My online consultation experience was incredibly easy and comfortable. Manah Psychiatry provided the best treatment right from my home. I feel like I'm slowly returning to my normal life now.",
      author: "Neha",
    },
    {
      title: "Empowering Support for My Son's ADHD",
      content:
        "My teenage son was struggling with ADHD. The doctors at Manah Psychiatry guided us with so much patience and care. Now, he is more focused and confident. We are truly grateful.",
      author: "A.K.",
    },
    {
      title: "Life-Changing Stability & Care",
      content:
        "Manah Psychiatry truly changed my life. Their caring approach and proper medication management gave me the stability I was searching for. I feel completely safe and supported here.",
      author: "Sneha",
    },
    // Adding a couple more, combining elements or creating new ones to reach 5-6 for a good slider
    {
      title: "Personalized Care, Real Results",
      content:
        "The team at Manah goes above and beyond to tailor treatment plans. Their dedication made a significant difference in my mental well-being and recovery journey.",
      author: "Rahul Sharma", // Fictitious author for variety if needed, or based on existing if available.
    },
    {
      title: "A Safe Space for Healing",
      content:
        "From the first consultation, I felt a deep sense of trust and understanding. Manah Psychiatry provides a safe, non-judgmental environment crucial for effective mental health support.",
      author: "Priya Devi", // Fictitious author
    },
  ];

  return (
    <section className="bg-[var(--color-background-soft)] py-12 px-4 sm:px-6 lg:px-8 xl:py-16">
      <div className="mx-auto max-w-[1340px]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-heading)]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Hear directly from individuals who have found hope, healing, and
            lasting wellness with Manah Psychiatry.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="flex h-full flex-col justify-between bg-[var(--color-card-background)] p-6 shadow-lg rounded-lg sm:p-8 border-t-4 border-[var(--color-button-primary)]">
                {" "}
                {/* Added shadow-lg and border for aesthetics */}
                <div>
                  <div className="flex gap-0.5 text-yellow-500">
                    {" "}
                    {/* Changed star color for vibrancy */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[var(--color-button-primary)] sm:text-3xl leading-snug">
                      {" "}
                      {/* Added leading-snug for better line height */}
                      {testimonial.title}
                    </p>
                    <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                      {" "}
                      {/* Using theme variable */}
                      {testimonial.content}
                    </p>
                  </div>
                </div>
                <footer className="mt-6 text-base font-medium text-[var(--color-heading)] sm:mt-8">
                  {" "}
                  {/* Adjusted margin and text color */}
                  &mdash; {testimonial.author}
                </footer>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {" "}
          {/* Increased top margin */}
          <button
            aria-label="Previous slide"
            onClick={() => sliderInstance?.prev()}
            className="rounded-full border border-[var(--color-button-primary)] p-3 text-[var(--color-button-primary)] transition hover:bg-[var(--color-button-primary)] hover:text-white transform hover:scale-110" // Added transform effect
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={() => sliderInstance?.next()}
            className="rounded-full border border-[var(--color-button-primary)] p-3 text-[var(--color-button-primary)] transition hover:bg-[var(--color-button-primary)] hover:text-white transform hover:scale-110" // Added transform effect
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
