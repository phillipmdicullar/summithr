import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./service.css"
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    number: "01",
    title: "Human Resource Consultancy",
    description:
      "Practical HR solutions that help organizations manage their people, strengthen workplace policies, and improve performance.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Professionals collaborating in a modern workplace",
  },
  {
    number: "02",
    title: "Casual Staff Outsourcing",
    description:
      "Flexible staffing solutions that help businesses meet changing operational demands with dependable workforce support.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    alt: "Staff working in a professional environment",
  },
  {
    number: "03",
    title: "Professional Cleaning Services",
    description:
      "Cleaning support for offices and commercial spaces, focused on professional standards and well-maintained environments.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional cleaning supplies",
  },
  {
    number: "04",
    title: "Real Estate & Property Management",
    description:
      "Property management support designed to help owners maintain their properties and manage day-to-day responsibilities.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern property representing real estate services",
  },
  {
    number: "05",
    title: "Product Promotion & Brand Merchandising",
    description:
      "Marketing and merchandising support to improve product visibility, engage customers, and strengthen brand presence.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    alt: "Retail customer interacting with a product",
  },
  {
    number: "06",
    title: "Import, Export & Customs Management",
    description:
      "Business support for import and export operations, including assistance with customs-related processes and coordination.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
    alt: "Shipping containers at a logistics port",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 grid items-end gap-7 lg:mb-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-blue-600">
              <span className="h-0.5 w-7 bg-blue-600" />
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0b1f33] sm:text-5xl lg:text-[58px]">
              Business solutions.
              <br />
              <span className="text-blue-600">
                Built around you.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From people management to property, marketing, and
              operational support, Summit HRMC helps businesses
              access the services they need to move forward.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-3 font-bold text-blue-700 transition-all duration-300 hover:gap-5"
            >
              Let's work together
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10"
            >
              {/* Image */}
              <a
                href="#contact"
                aria-label={`Enquire about ${service.title}`}
                className="relative block h-56 overflow-hidden bg-slate-200 sm:h-60"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071d32]/75 via-[#071d32]/10 to-transparent" />

                <span className="absolute bottom-5 left-5 text-sm font-extrabold tracking-[0.2em] text-white">
                  {service.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-blue-700">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-sm"
                  />
                </span>
              </a>

              {/* Content */}
              <div className="flex min-h-[245px] flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug tracking-tight text-[#0b2d4f] transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-bold text-blue-700 transition-all duration-300 hover:gap-5"
                >
                  Explore service
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 flex flex-col gap-7 rounded-2xl bg-[#0b2d4f] p-7 text-white sm:p-10 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-300">
              Have a specific business need?
            </span>

            <h3 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
              Let's find the right solution for your business.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100/70">
              Talk to our team about the support your organization needs.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-bold text-[#0b2d4f] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Talk to Our Team
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

      </div>
    </section>
  );
}