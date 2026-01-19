import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import img1 from "../assets/DrArchana.png";
import img2 from "../assets/Jaya.png";
import img3 from "../assets/DrBhoomika.jpg";
import img4 from "../assets/DrPrerna.jpg";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Archana Singh",
      degrees: "MBBS, MD Psychiatry, DPM (CIP Kanke - Ranchi)",
      designation: "Lead Psychiatrist",
      image: img1,
      description: [
        "Over 12 years of experience helping children, teens, and adults feel better.",
        "Specializes in anxiety, depression, mood changes, and comprehensive mental health support.",
        "Utilizes special therapies like CBT and DBT for gentle patient guidance.",
        "Committed to providing hope, healing, and a safe space for every individual.",
      ],
    },
    {
      name: "Prerna Sneh",
      degrees: "M.Phil. (Amity University Jaipur)",
      designation: "Clinical Psychologist (RCI)",
      image: img4,
      description: [
        "Clinical Psychologist with experience across Dr. Sanjay Jain Clinic, NIMS University, Disha Foundation, and Gautam Hospital.",
        "Expert in ADHD, autism, stress, anxiety, depression, and relationship issues.",
        "Practices CBT, REBT, Mindfulness, and Family & Marital Therapies.",
      ],
    },
    {
      name: "Ms. Jaya Bhardwaj",
      degrees: "PG (Disability Rehabilitation Development)",
      designation: "Licensed Rehabilitation Expert",
      image: img2,
      description: [
        "A kind and caring expert in managing stress and emotional challenges.",
        "Years of experience creating gentle therapy programs for psychiatric patients.",
        "Believes in empathetic listening, guiding each person toward a happier, more confident life.",
      ],
    },
    {
      name: "Dr. Bhoomika Sachacher",
      degrees: "PhD (Clinical Psychology)",
      designation: "Clinical Psychologist",
      image: img3,
      description: [
        "A gentle and experienced clinical psychologist with over 8 years of practice.",
        "Specializes in child and adolescent psychology.",
        "Helps young minds feel safe, understood, and supported.",
        "Guides children, teens, and families toward healing, confidence, and better mental health.",
      ],
    },
  ];

  const [isFlipped, setIsFlipped] = useState(
    Array(teamMembers.length).fill(false)
  );

  const handleFlip = (index) => {
    const newFlipState = [...isFlipped];
    newFlipState[index] = !newFlipState[index];
    setIsFlipped(newFlipState);
  };

  return (
    <>
      <Navbar /> {/* Navbar included at the top */}
      <section className="pt-22 bg-[var(--color-background)] py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading and CountUp */}
          <div className="text-center mb-12">
            <p className="text-base text-[var(--color-button-primary)] font-semibold uppercase mb-2">
              Meet Our Expert Team
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-heading)] mb-6 
            leading-tight">
              Compassionate Minds, Trusted Hands:{" "}
              <br className="hidden md:inline" /> Manah Psychiatry Specialists
            </h2>
            <div className="bg-[var(--color-button-primary)] rounded-full px-8 py-3 shadow-lg inline-block">
              <p className="flex items-center space-x-3">
                <span className="text-4xl font-bold text-[var(--color-text-primary)]">
                  <CountUp end={500} duration={3} />+
                </span>
                <span className="text-lg font-medium text-[var(--color-text-primary)]">
                  Lives Transformed
                </span>
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group w-full h-[450px]">
                <ReactCardFlip
                  isFlipped={isFlipped[idx]}
                  flipDirection="horizontal"
                >
                  {/* Front Side */}
                  <div
                    className="w-full h-full bg-[var(--color-card-background)] rounded-xl shadow-lg 
                    flex flex-col items-center p-6 cursor-pointer transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => handleFlip(idx)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-52 object-cover rounded-lg mb-4 shadow-md"
                    />
                    <h3 className="text-[var(--color-heading)] font-bold text-xl mt-2">
                      {member.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-base font-medium">
                      {member.degrees}
                    </p>
                    <p className="text-[var(--color-button-primary)] font-semibold text-lg mt-2">
                      {member.designation}
                    </p>
                    <p className="text-sm mt-auto text-[var(--color-text-secondary)]">
                      Click to learn more
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="w-full h-full bg-[var(--color-card-background)] rounded-xl shadow-lg
                     flex flex-col justify-center text-left p-6 cursor-pointer transform group-hover:scale-105
                      transition-transform duration-300 ease-in-out"
                    onClick={() => handleFlip(idx)}
                  >
                    <h3 className="text-[var(--color-heading)] font-bold text-xl mb-4 text-center">
                      About {member.name.split(" ")[0]}
                    </h3>
                    <ul className="text-[var(--color-text-secondary)] list-disc list-inside space-y-2 
                    text-base leading-relaxed">
                      {member.description.map((point, descIdx) => (
                        <li key={descIdx}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm mt-auto text-center text-[var(--color-text-secondary)]">
                      Click to flip back
                    </p>
                  </div>
                </ReactCardFlip>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer className="text-white" /> {/* Footer included at the bottom */}
    </>
  );
};

export default TeamSection;
