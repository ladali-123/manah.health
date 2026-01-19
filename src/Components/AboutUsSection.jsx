import CountUp from "react-countup";

import Button from "./Button";
import img1 from "../assets/AboutImage1.jpg";
import img2 from "../assets/AboutImage2.jpg";

export default function AboutSection() {
  const checkmarkSvg = (
    <svg width="20px" height="20px" viewBox="0 -3.5 170 170" fill="none">
      <path
        d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567..."
        fill="#035b99"
        strokeWidth="2"
      />
      <path
        d="M74.6287 104.313C76.2312 102.79 77.1115 102.019..."
        fill="#035b99"
        strokeWidth="8"
      />
    </svg>
  );

  return (
    <div className="bg-[var(--color-background)] py-16 px-6 flex flex-col lg:flex-row items-center lg:justify-center gap-10 lg:w-4/5 w-full mx-auto">
      
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start gap-6 lg:flex-shrink-0">
        <div className="bg-[var(--color-card-background)] rounded-lg shadow-md p-6 flex flex-col items-center lg:items-start gap-4 w-full max-w-sm">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[var(--color-star)] text-xl">★</span>
            ))}
          </div>

          <p className="text-[var(--color-text-secondary)] font-medium text-lg text-justify lg:text-left">
            Customer Review{" "}
            <span className="font-bold">
              <CountUp end={5000} duration={5} />+
            </span>
          </p>

          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ7lUZQ9HAYEiG27FdTEU9Dz6-w28mxqo_A&s",
                "https://thumbs.dreamstime.com/b/confident-indian-woman-21143788.jpg",
                "https://www.shutterstock.com/image-photo/portrait-young-adult-indian-woman-260nw-2387090027.jpg",
                "https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-[var(--color-background)]"
                />
              ))}
            </div>
            <span className="bg-[var(--color-badge)] text-[var(--color-text-secondary)] px-2 py-1 rounded-full text-sm">
              5k+
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <img src={img1} className="rounded-lg shadow-md h-64 w-full object-cover" />
          <img src={img2} className="rounded-lg shadow-md h-64 w-full object-cover" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-8 max-w-xl lg:flex-grow text-justify lg:text-left">

        <div>
          <h2 className="text-3xl font-semibold text-[var(--color-heading)] text-center lg:text-left">
            Expert & Compassionate Psychiatric Care in Patna | Manah Psychiatry</h2>


          <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
            At Manah Psychiatry, we believe that the mind deserves as much care as the body.
            Our friendly team, guided by the best psychiatrists in Patna online, is here to
            listen, understand, and help.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--color-heading)]">
            Our Vision
          </h3>
          <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
            Our goal at Manah Psychiatry is to make individuals smile, offer them hope and
            help them feel strong on the inside.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--color-heading)]">
            Why Choose Us: Our Core Benefits
          </h3>

          <p className="text-[var(--color-text-secondary)] mt-4 mb-3 leading-relaxed">
            Our mission at Manah Psychiatry is to use compassion and science to heal so that
            each patient feels respected, safe and supported.
          </p>

          <ul className="mt-4 space-y-3">
            {[
              ["Compassionate Care", "Kindness, respect, and understanding for every patient."],
              ["Holistic Healing", "Support for mind, emotions and overall well-being."],
              ["Better Quality of Life", "Healthier relationships and improved focus."],
              ["Trusted Expertise", "Years of experience and thousands of lives transformed."]
            ].map(([title, text], i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1">{checkmarkSvg}</span>
                <span className="text-[var(--color-text-secondary)] leading-relaxed text-justify lg:text-left">
                  <strong>{title}:</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 justify-center lg:justify-start">
          <Button text="Learn More" href="/about" variant="primary" />
          <Button text="Get in Touch" href="/contact" variant="secondary" />
           <Button text="Expert Doctors👨‍⚕️" href="/MeetTeam" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
