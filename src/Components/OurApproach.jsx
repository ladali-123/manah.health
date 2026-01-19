import img1 from "../assets/Approachportrait.jpg";
import img2 from "../assets/ApproachPortrait1.jpg";

export default function OurApproach() {
  const TickIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-[var(--color-background-soft)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-button-primary)]">
                Our Approach
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] leading-tight">
                Comprehensive, Compassionate Psychiatric Care
              </h3>
            </div>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              At Manah Psychiatry, we follow a kind and caring approach to
              mental health, ensuring every patient receives personalized,
              evidence-based treatment in a supportive environment.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full border-2 border-[var(--color-button-primary)] bg-white flex items-center justify-center">
                  <TickIcon />
                </div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    Personalized Care:
                  </span>{" "}
                  Every patient gets a treatment plan made just for them after a
                  detailed psychiatric assessment.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full border-2 border-[var(--color-button-primary)] bg-white flex items-center justify-center">
                  <TickIcon />
                </div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    Evidence-Based Treatments:
                  </span>{" "}
                  We use proven methods like CBT, therapy, and safe medications
                  for effective recovery.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full border-2 border-[var(--color-button-primary)] bg-white flex items-center justify-center">
                  <TickIcon />
                </div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    Round-the-Clock Support:
                  </span>{" "}
                  Our team is always here for you, with 24/7 clinical support
                  and crisis care.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full border-2 border-[var(--color-button-primary)] bg-white flex items-center justify-center">
                  <TickIcon />
                </div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    Teamwork in Healing:
                  </span>{" "}
                  Our psychiatrists, psychologists, and rehabilitation experts
                  work together for your complete well-being.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full border-2 border-[var(--color-button-primary)] bg-white flex items-center justify-center">
                  <TickIcon />
                </div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-heading)]">
                    Advanced Diagnostics:
                  </span>{" "}
                  We employ contemporary technologies to better evaluate mental
                  health requirements and develop tailored treatment programs.
                </div>
              </div>
            </div>
          </div>

          {/* Images Section - Much Larger and Balanced */}
          <div className="relative h-full">
            <div className="grid grid-cols-1 gap-6 h-full min-h-[600px]">
              {/* First image - larger */}
              <div className="relative">
                <img
                  src={img1}
                  alt="Personalized Psychiatric Assessment"
                  className="w-full h-80 rounded-2xl object-cover shadow-2xl"
                />
              </div>

              {/* Second image - positioned with offset */}
              <div className="relative -mt-12 ml-8">
                <img
                  src={img2}
                  alt="Therapy and Counseling Session"
                  className="w-4/5 h-72 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
