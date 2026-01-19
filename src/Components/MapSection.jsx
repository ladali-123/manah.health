import { Navigation } from "lucide-react";

const MapSection = () => {
  const directionsUrl =
    "https://www.google.co.in/maps/place/Manah+INSTITUTE+OF+PSYCHIATRY+AND+BEHAVIOURAL+SCIENCES+%7C+Dr+Archana+Singh/@25.6189419,85.0765962,17z/data=!3m1!4b1!4m6!3m5!1s0x140d7ef4b8058a39:0x638b1816f81ec51!8m2!3d25.6189371!4d85.0791711!16s%2Fg%2F11b7fbhjvw?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D";

  // Data for distance points (kept as is)
  const distancePoints = [
    { landmark: "Patliputra Railway Station", distance: "1.8 km (5 min)" },
    { landmark: "Gandhi Maidan", distance: "12.7 km (25 min)" },
    { landmark: "Patna Airport", distance: "4.7 km (17 min)" },
    { landmark: "Patna Junction", distance: "9 km (23 min)" },
  ];

  return (
    <section className="bg-[var(--color-background-soft)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[var(--color-heading)]">
          Find Your Way to Manah Psychiatry
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          {/* Left Section - Details & Distances */}
          <div className="w-full lg:w-5/12 xl:w-1/2 bg-[var(--color-card-background)] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-5 text-[var(--color-heading)]">
              Visit Our Clinic
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8 text-base leading-relaxed">
              Manah Psychiatry is conveniently located in Ashiana Nagar, Patna.
              Below are estimated travel times from key city landmarks, helping
              you plan your visit with ease:
            </p>
            <ul className="space-y-5 mb-8">
              {distancePoints.map((item, index) => (
                <li key={index} className="flex items-baseline gap-3">
                  <div className="flex-shrink-0 mt-px">
                    <Navigation
                      className="text-[var(--color-button-primary)]" // Changed to theme variable
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-heading)]">
                      {item.landmark}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.distance}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Interactive Map (iframe) */}
          <div className="w-full lg:w-7/12 xl:w-1/2">
            <div className="relative rounded-xl shadow-lg overflow-hidden h-[450px] w-full">
              {" "}
              {/* Set a fixed height for the iframe container */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5779504192446!2d85.0791711!3d25.6189371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x140d7ef4b8058a39%3A0x638b1816f81ec51!2sManah%20INSTITUTE%20OF%20PSYCHIATRY%20AND%20BEHAVIOURAL%20SCIENCES%20%7C%20Dr%20Archana%20Singh!5e0!3m2!1sen!2sin!4v1756713607205!5m2!1sen!2sin"
                width="100%" // Ensure it takes full width of its container
                height="100%" // Ensure it takes full height of its container
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map location of Manah Institute of Psychiatry" // Added a descriptive title for accessibility
              ></iframe>
            </div>
            {/* Optional: Add a "Get Directions" button below the map */}
            <div className="mt-6 text-center">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--color-button-primary)] hover:bg-[var(--color-button-primary-hover)] transition-colors duration-200"
              >
                <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
