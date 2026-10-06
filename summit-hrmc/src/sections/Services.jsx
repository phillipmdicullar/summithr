import "./service.css"
import {
  Users,
  TrendingUp,
  Megaphone,
  GraduationCap,
  BriefcaseBusiness,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Placement",
    description:
      "Connect with skilled and reliable talent that fits your business needs.",
  },
  {
    icon: TrendingUp,
    title: "Team Development",
    description:
      "Build stronger teams through training, coaching, and capacity building.",
  },
  {
    icon: Megaphone,
    title: "Strategic Marketing",
    description:
      "Grow your brand with creative and results-driven marketing solutions.",
  },
  {
    icon: GraduationCap,
    title: "Corporate Training",
    description:
      "Practical training programs designed to improve skills and performance.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Recruitment Support",
    description:
      "Streamline your hiring process and find the right people faster.",
  },
  {
    icon: BarChart3,
    title: "HR Consulting",
    description:
      "Tailored HR strategies that improve productivity and workplace culture.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section intro */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr]">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Services
            </span>

            <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-tight text-[#0b2d4f] sm:text-5xl">
              Solutions for
              <br />
              <span className="text-blue-600">Your Growth.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              We provide end-to-end HR and marketing solutions to
              help your business attract talent, build strong teams,
              and grow your brand.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Discuss Your Needs
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Services grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0b2d4f]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-blue-600 transition group-hover:bg-blue-50">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}