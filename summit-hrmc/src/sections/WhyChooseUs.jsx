import {
  CheckCircle2,
  Users,
  Target,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import "./why.css"
const reasons = [
  {
    icon: Users,
    title: "People First",
    text: "We understand that great businesses are built around great people.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    text: "Our solutions are designed around your organization's specific goals and challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    text: "We maintain high standards of professionalism, confidentiality, and service.",
  },
  {
    icon: Lightbulb,
    title: "Practical Expertise",
    text: "We focus on practical strategies that create measurable value for your organization.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about-us"
      className="overflow-hidden bg-slate-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">

          {/* Decorative shape */}
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-3xl bg-blue-600/10" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professionals collaborating in a meeting"
              className="h-[560px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d4f]/60 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                  <CheckCircle2
                    size={23}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Trusted Partner
                  </p>

                  <p className="text-xs text-slate-500">
                    People & Business Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Content */}
        <div>

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Why Summit
          </span>

          <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#0b2d4f] sm:text-5xl">
            We don't just provide
            <span className="text-blue-600"> services.</span>
            <br />
            We build partnerships.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            At Summit Human Resource & Marketing Consultant, we
            believe successful organizations start with the right
            people, the right strategy, and the right support.
          </p>

          {/* Reasons */}
          <div className="mt-9 space-y-6">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0b2d4f]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                      {reason.text}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Learn more about Summit
            <span aria-hidden="true">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}