import Button from "./Button";
import img1 from "../assets/ManahLogo.webp";
import img2 from "../assets/SmileyHand.jpg";

export default function WhyChooseUsSection() {
  const checkmarkSvgIcon = (
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <div className="bg-[var(--color-background)] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Full Width */}
        <div className="text-center mb-12">
          <p className="text-base font-semibold tracking-wide uppercase
           text-[var(--color-button-primary)] mb-4">
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--color-heading)" }}
          >
            Your Journey to Mental Wellness Starts Here
          </h2>
          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              textAlign: "justify",
              textAlignLast: "center", // last line sundar dikhegi
            }}
          >
            At Manah Psychiatry, we believe every mind is precious and deserves
            compassionate care. Life&apos;s challenges can feel overwhelming,
            and it&apos;s always okay to seek support. Our clinic is a sanctuary
            of healing, built on love and understanding, where you can openly
            share your feelings and find dedicated support.
          </p>

        </div>

        {/* Main Content Section - Image and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Left Section with Images and Spinning Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={img2}
                alt="Compassionate Psychiatric Consultation"
                className="rounded-lg shadow-xl max-w-full lg:max-w-md object-cover lg:h-[400px]"
              />
              {/* Spinning Logo */}
              <div className="absolute rounded-full top-4 w-36 h-36 lg:w-40 lg:h-40 bg-transparent text-white flex items-center justify-center animate-spin-slow">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 210 210"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M105,105 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0"
                    />
                  </defs>
                  <text
                    fill="#000"
                    fontSize="22"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                  >
                    <textPath href="#circlePath" startOffset="50%">
                      Manah Psychiatry – Healing Minds with Compassion
                    </textPath>
                  </text>
                </svg>
                <img
                  src={img1}
                  alt="Manah Psychiatry Logo"
                  className="absolute w-20 h-20 object-contain"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Key Benefits Grid */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                label: "Compassionate Care",
                description:
                  "Experience genuine kindness, respect, and deep understanding with every interaction.",
              },
              {
                label: "Holistic Healing Approach",
                description:
                  "Beyond medication, we nurture your mind, emotions, and overall well-being for complete recovery.",
              },
              {
                label: "Enhanced Quality of Life",
                description:
                  "Our guidance empowers you to build healthier relationships, sharpen focus, and embrace a happier daily routine.",
              },
              {
                label: "Expert & Trusted Care",
                description:
                  "Benefit from years of psychiatric excellence, transforming thousands of lives with gentle, evidence-based treatment.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-[var(--color-button-primary)] flex-shrink-0 mt-1">
                  {checkmarkSvgIcon}
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--color-heading)] text-lg mb-2">
                    {benefit.label}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation Section - Full Width */}
        <div className="space-y-6 mb-8">
          <p
            className="text-[var(--color-text-secondary)] leading-relaxed max-w-full mx-auto lg:mx-0"
            style={{
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            Our dedicated team of experienced psychiatrists in Patna
            doesn&apos;t just treat symptoms; we listen with profound patience
            and warmth. Whether you&apos;re navigating anxiety, depression,
            ADHD, or other emotional struggles, our doctors and counselors walk
            beside you, ensuring you never feel isolated. We meticulously craft
            personalized treatment plans focused on healing both your mind and
            heart, empowering you to rediscover happiness, confidence, and inner
            strength.
          </p>

          <p
            className="text-[var(--color-text-secondary)] leading-relaxed max-w-full mx-auto lg:mx-0"
            style={{
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            We uphold the highest standards of compassion, respect, and absolute
            confidentiality. You&apos;ll feel secure and understood, knowing all
            your conversations remain private. Numerous families trust us
            implicitly for our balanced approach of heartfelt understanding and
            cutting-edge scientific treatment, making us a reliable and
            unwavering partner in your mental health journey.
          </p>
        </div>

        {/* Call to Action - Centered */}
        <div className="text-center">
          <Button
            size="lg"
            variant="primary"
            text="Book Your Confidential Consultation"
            href="/contact"
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
