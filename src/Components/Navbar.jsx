import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import logo from "../assets/ManahFinalLogo.webp";
import {
  FaUserMd,
  FaClinicMedical,
  FaPills,
  FaUsers,
  FaChild,
  FaVideo,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout to avoid premature closing
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 500ms (or any time you prefer)
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500); // Delay time in milliseconds
    setTimeoutId(id);
  };

  // Track scroll position for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Psychiatric Consultation",
      link: "/services/psychiatric-consultation",
      icon: FaUserMd,
    },
    {
      title: "Comprehensive Mental Health Assessment",
      link: "/services/mental-health-assessment",
      icon: FaClinicMedical,
    },
    {
      title: "Medication Management",
      link: "/services/medication-management",
      icon: FaPills,
    },
    {
      title: "Neuropsychiatric Care",
      link: "/services/neuropsychiatric-care",
      icon: FaUsers,
    },
    {
      title: "Child & Adolescent Psychiatry",
      link: "/services/child-and-adolescent-psychiatry",
      icon: FaChild,
    },
    {
      title: "Telepsychiatry",
      link: "/services/telepsychiatry",
      icon: FaVideo,
    },
  ];

  const pagesWithButton = ["/", "/about", "/therapy-and-counselling"];
  const showBookNowButton = pagesWithButton.includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[var(--color-text-primary)] text-2xl font-semibold">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-52 h-16" />
          </Link>
        </div>

        {/* Desktop Menu for Larger Screens */}
        <div className="hidden lg:flex space-x-8 items-center text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-[var(--color-button-primary)] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[var(--color-button-primary)] transition-colors"
          >
            About Us
          </Link>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[var(--color-button-primary)] transition-colors flex items-center focus:outline-none">
              Services
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute bg-white shadow-lg mt-2 py-2 font-normal rounded-lg w-60 z-10"
                onMouseEnter={handleMouseEnter} // Keep dropdown open when mouse is over dropdown
                onMouseLeave={handleMouseLeave} // Close after delay when mouse leaves dropdown
              >
                {services.map((service, index) => (
                  <div key={service.link}>
                    <Link
                      to={service.link}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[var(--color-button-primary-hover)] hover:bg-gray-100 transition-colors"
                    >
                      <service.icon className="w-5 h-5 text-[var(--color-button-primary)]" />
                      <span>{service.title}</span>
                    </Link>
                    {index < services.length - 1 && (
                      <hr className="border-gray-200 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/blogs"
            className="hover:text-[var(--color-button-primary)] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-[var(--color-button-primary)] transition-colors"
          >
            Contact Us
          </Link>
          {showBookNowButton && (
            <Button
              size="lg"
              variant="primary"
              className="ml-4"
              href="https://book-appointment.healthplix.com/dr-dr-archana-singh-psychiatry-ashiana-nagar--patna"
              text="Book Now"
            />
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[var(--color-text-primary)] focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${
                isScrolled ? "text-black" : "text-current"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 rounded-b-xl w-full py-6 bg-white z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
        >
          &times;
        </button>

        {/* Logo */}
        <div className="flex justify-center py-6">
          <img src={logo} alt="Logo" className="w-36 h-12" />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6 px-8 text-left text-black text-xl font-semibold">
          <Link
            to="/"
            className="hover:text-[var(--color-star)] transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[var(--color-star)] transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-[var(--color-star)] transition-colors flex items-center"
            >
              Services
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-white shadow-md rounded-md z-10 md:w-auto md:mt-0 md:relative">
                <div className="flex flex-col space-y-2 p-4 md:p-0 md:space-y-0 md:flex-row md:space-x-4 font-normal">
                  {services.map((service) => (
                    <div key={service.link} className="py-2">
                      <Link
                        to={service.link}
                        className="flex items-center gap-2 text-gray-700 hover:text-[var(--color-star)] transition-colors"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          toggleMenu();
                        }}
                      >
                        <service.icon className="w-5 h-5 text-[var(--color-button-primary)]" />
                        <span>{service.title}</span>
                      </Link>
                      <hr className="mt-2 border-gray-200" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            className="hover:text-[var(--color-star)] transition-colors"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-[var(--color-star)] transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          {showBookNowButton && (
            <Button
              size="md"
              variant="primary"
              className="mt-4"
              href="/appointment"
              text="Book Now"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
