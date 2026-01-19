import { Link } from "react-router-dom";
import img1 from "../assets/TherapyAndCounselling/TherapyCarousel.webp";
import img2 from "../assets/PsychiatricEvaluation/CarouselPsychiatricEvaluation.jpg";
import img3 from "../assets/MedicationManagement/DoctorAndMedicineOnTable.webp";
import img4 from "../assets/FamilyTherapy/FamilyTherapy.webp";
import img5 from "../assets/ChildAndAdolescentPsychiatry/CarouselChildPsychiatry.webp";
import img6 from "../assets/Telepsychiatry/CarouselTelepsychiatry.webp";

const ServicesSection = () => {
  const services = [
    {
      title: "Psychiatric Consultation",
      description:
        "Expert diagnosis and personalized treatment plans for mental health disorders",
      imgSrc: img1,
      link: "/services/psychiatric-consultation",
    },
    {
      title: "Comprehensive Mental Health Assessment",
      description:
        "In-depth evaluations to diagnose and manage psychiatric conditions",
      imgSrc: img2,
      link: "/services/mental-health-assessment",
    },
    {
      title: "Medication Management",
      description:
        "Professional prescription and monitoring of psychiatric medications",
      imgSrc: img3,
      link: "/services/medication-management",
    },
    {
      title: "Neuropsychiatric Care",
      description:
        "Specialized treatment for complex psychiatric and neurological disorders",
      imgSrc: img4,
      link: "/services/neuropsychiatric-care",
    },
    {
      title: "Child & Adolescent Psychiatry",
      description: "Expert mental health care for children and teenagers",
      imgSrc: img5,
      link: "/services/child-adolescent-psychiatry",
    },
    {
      title: "Telepsychiatry",
      description:
        "Secure online psychiatric consultations for accessible mental healthcare",
      imgSrc: img6,
      link: "/services/telepsychiatry",
    },
  ];

  return (
    <section className="px-4  bg-white">
      <div className="max-w-7xl mx-auto text-left">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-button-primary)]">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-700 text-justify md:text-left">
              We offer expert psychiatric care for a wide range of mental health conditions.
              Explore our services to find the right treatment for your needs.
            </p>

          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden group"
              style={{ backgroundImage: `url(${service.imgSrc})` }}
            >
              <Link to={service.link} className="absolute inset-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-white text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-white">{service.description}</p>
                  <span className="mr-2 mt-4 text-white flex items-center group-hover:opacity-100 opacity-0 transition-opacity">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-4 text-white group-hover:opacity-100 opacity-0 transition-opacity"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
