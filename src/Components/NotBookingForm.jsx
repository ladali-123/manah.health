import { useState } from "react";
import Button from "./Button";
import { hourServiceIcon } from "./SvgIcons";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: "",
  });

  // Update form values
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, query } = formValues;

    const message = `
      Hello, I would like to book an appointment. Here are the details:
      - Name: ${firstName} ${lastName}
      - Email: ${email}
      - Phone: ${phone}
      - Query: ${query}
    `.trim();

    const isMobile = /iPhone|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/7543976796?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=7543976796&text=${encodeURIComponent(
          message
        )}`;

    window.open(whatsappUrl, "_blank");

    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <div className="bg-[var(--color-button-primary)] text-[var(--color-card-text)] py-12 px-4 md:px-8">
      <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg overflow-hidden">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 bg-[var(--color-background-dark)] text-[var(--color-text-light)]">
          <h2 className="text-lg mb-4">Get in Touch</h2>
          <p className="text-4xl font-semibold mb-6 text-[var(--color-button-primary)]">
            Have questions or need assistance? We are here to help.
          </p>

          {/* Customer Service Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              {hourServiceIcon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Customer Services</h3>
              <p className="text-sm md:text-base">+91 7543976796</p>
            </div>
          </div>

          {/* Email Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <svg
                height="40px"
                width="40px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    fill="#035b99"
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
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="text-sm md:text-base">info@manah.health</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 bg-[var(--color-background-light)] rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-primary)]"
                  required
                />
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-background)]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-background)]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-background)]"
                required
              />
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium">
                Write your query
              </label>
              <textarea
                id="query"
                placeholder="Write your message"
                value={formValues.query}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-button-background)]"
              />
            </div>

            <Button
              text="Submit"
              type="submit"
              className="py-3 mt-4 font-semibold rounded-lg shadow-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
