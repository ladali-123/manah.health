import { facebookSvg, instaSvg, linkedinSvg } from "./SvgIcons";
import img1 from "../assets/ManahFinalLogoWhite.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-button-primary)] text-white py-12">
      <div className="max-w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <div className="mt-6 flex justify-center">
            <img src={img1} alt="Manah Logo" className="w-full h-auto" />
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sitemap Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/psychiatric-consultation"
                  className="hover:underline"
                >
                  Psychiatric Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mental-health-assessment"
                  className="hover:underline"
                >
                  Comprehensive Mental Health Assessment
                </Link>
              </li>
              <li>
                <Link
                  to="/services/medication-management"
                  className="hover:underline"
                >
                  Medication Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/neuropsychiatric-care"
                  className="hover:underline"
                >
                  Neuropsychiatric Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services/child-and-adolescent-psychiatry"
                  className="hover:underline"
                >
                  Child & Adolescent Psychiatry
                </Link>
              </li>
              <li>
                <Link to="/services/telepsychiatry" className="hover:underline">
                  Telepsychiatry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact us</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-center space-x-2">
              <span className="font-semibold">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                >
                  <path
                    fill="#fff"
                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                  />
                </svg>
              </span>
              <span>
                HIG X-9, Ashiana Nagar Main Road, Opposite Jagat Enclave, Patna
                - 800025
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <span className="font-semibold">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#fff"
                  />
                </svg>
              </span>{" "}
              <a href="tel:+917543976796" className="hover:underline">
                +91 7543976796 /{" "}
                <a href="tel:+917759945555" className="hover:underline">
                  +91 7759945555
                </a>
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <span className="font-semibold">
                <svg
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      fill="#fff"
                      d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083
		h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92
		c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87
		C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024
		c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674
		l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469
		c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599
		C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92
		c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92
		C462.107,387.195,462.94,397.75,456.948,404.771z"
                    />
                  </g>
                </svg>
              </span>{" "}
              <a href="mailto:info@manah.health" className="hover:underline">
                info@manah.health
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          {/* Logo Section */}
          <h4 className="text-lg font-semibold mb-4">
            Manah Institute of Psychiatry and Behavioral Sciences
          </h4>
          <p className="text-sm leading-relaxed text-justify sm:text-left">
            At Manah, we aim to provide comprehensive mental health support,
            empowering individuals to overcome challenges and lead fulfilling
            lives. Our mission is to promote mental well-being for all.
          </p>
          <h4 className="text-lg font-semibold mb-4 mt-8">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Manah-Institute-of-Psychiatry-and-Behavior-Sciences/61571910815242/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-social-facebook)] text-white hover:opacity-90"
            >
              {facebookSvg}
            </a>
            <a
              href="https://www.instagram.com/manahpsychiatrycare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-social-instagram)] text-white hover:opacity-90"
            >
              {instaSvg}
            </a>
            <a
              href="https://www.linkedin.com/company/manah-institute-of-psychiatry-and-behavior-sciences/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-social-linkedin)] text-white hover:opacity-90"
            >
              {linkedinSvg}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[var(--color-text-primary)] pt-6">
        <p className="text-center text-sm max-w-xs mx-auto px-4 leading-relaxed">
          © {new Date().getFullYear()} Manah Institute of Psychiatry and
          Behavioral Sciences | Powered by{" "}
          <a
            href="https://progressix.in/"
            target="_blank"
            className="text-blue-400 font-semibold hover:text-yellow-400"
          >
            Progressix
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
