import { useEffect, useState } from "react";
import Button from "./Button";
import { ClockIcon } from "./SvgIcons.jsx";

const AppointmentForm = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phone, service, date, request } =
      formValues;

    const message = `
Hello, I would like to book an appointment. Here are the details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Service: ${service}
- Date: ${date}
- Request: ${request}
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
      service: "",
      date: "",
      request: "",
    });
  };

  return (
    <div className="bg-[var(--color-button-primary)] text-[var(--color-card-text)] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg overflow-hidden">

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-[var(--color-background-light)]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Make an Appointment
          </h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
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
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
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
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg"
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
                value={formValues.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="service" className="block text-sm font-medium">
                  Service
                </label>
                <select
                  id="service"
                  value={formValues.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="counseling">Counseling</option>
                  <option value="therapy">Therapy</option>
                  <option value="psychotherapy">Psychotherapy</option>
                </select>
              </div>

              <div className="w-full md:w-1/2">
                <label htmlFor="date" className="block text-sm font-medium">
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  min={currentDate}
                  value={formValues.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <Button
              text="Book Appointment"
              type="submit"
              className="py-3 mt-4 font-semibold rounded-lg shadow-md"
              href="https://book-appointment.healthplix.com/dr-dr-archana-singh-psychiatry-ashiana-nagar--patna"
            />
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl mt-8 sm:text-3xl lg:text-4xl font-bold text-[var(--color-button-primary)]">
              Book your consultation effortlessly
            </h2>
            <p className="mt-2 text-gray-700">
              Choose a date and time that fits your schedule
            </p>
          </div>

          {/* Opening Hours Card */}
          <div className="p-3 bg-gray-100 rounded-xl shadow-md w-full sm:max-w-lg">
            <h3 className="flex items-center gap-5 mb-3 text-lg font-semibold text-gray-800">
              <span className="w-4 gap-2 text-[var(--color-button-primary)]">
                {ClockIcon}
              </span>
              Opening Hours
            </h3>

            <ul className="text-sm md:text-base text-gray-700 space-y-3">
              <li><strong>Mon:</strong> 04:00 PM – 07:00 PM</li>
              <li><strong>Tue:</strong> 04:00 PM – 07:00 PM</li>
              <li><strong>Wed:</strong> 09:00 AM – 01:00 PM | 04:00 PM – 07:00 PM</li>
              <li><strong>Thu:</strong> 09:00 AM – 01:00 PM | 04:00 PM – 07:00 PM</li>
              <li><strong>Fri:</strong> 04:00 PM – 07:00 PM</li>
              <li><strong>Sat:</strong> 09:00 AM – 01:00 PM | 04:00 PM – 07:00 PM</li>
              <li><strong>Sun:</strong> 09:00 AM – 01:00 PM | 04:00 PM – 07:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
