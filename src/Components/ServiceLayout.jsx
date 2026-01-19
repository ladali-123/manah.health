import { Link } from "react-router-dom";

const services = [
  { name: "Psychiatric Consultation", id: "psychiatric-consultation" },
  {
    name: "Mental Health Assessment",
    id: "mental-health-assessment",
  },
  { name: "Medication Management", id: "medication-management" },
  { name: "Neuropsychiatric Care", id: "neuropsychiatric-care" },
  { name: "Child & Adolescent Psychiatry", id: "child-and-adolescent-psychiatry" },
  { name: "Telepsychiatry", id: "telepsychiatry" },
];

const ServiceLayout = ({ currentService }) => {
  return (
    <aside className="lg:sticky top-20 lg:mt-9 lg:w-1/4">
      <h2 className="text-lg font-semibold mb-4">Services Category</h2>
      <ul className="space-y-4">
        {services.map(
          (service) =>
            service.name !== currentService && (
              <li key={service.id}>
                <Link
                  to={`/services/${service.id}`}
                  className="w-full block text-left p-3 border border-gray-300 hover:text-[var(--color-text-primary)] rounded-md shadow-sm hover:bg-[var(--color-button-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-button-primary-hover)]"
                >
                  {service.name} <span className="float-right">→</span>
                </Link>
              </li>
            )
        )}
      </ul>
    </aside>
  );
};

export default ServiceLayout;
