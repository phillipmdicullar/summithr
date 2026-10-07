import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Target,
} from "lucide-react";
import "./about.css"
export default function About() {
  return (
   <div className="about-summit">
     <section className=" bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Top section */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">

          {/* Heading */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About Summit
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0b2d4f] sm:text-5xl">
              People are at the
              <span className="text-blue-600"> heart </span>
              of every business.
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Summit Human Resource & Marketing Consultant partners
              with organizations to solve people, talent, and marketing
              challenges through practical and strategic solutions.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-500">
              We work with businesses and professionals to create
              stronger workplaces, develop talent, and build brands
              that connect with their audiences.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Discover our story
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl bg-[#0b2d4f] p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Target size={24} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-blue-100/70">
              To provide innovative and reliable human resource,
              talent development, and marketing solutions that create
              meaningful value for organizations and individuals.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Eye size={24} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#0b2d4f]">
              Our Vision
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              To become a trusted partner in building capable people,
              stronger organizations, and sustainable brands across
              Africa.
            </p>
          </div>

        </div>

        {/* Values */}
        <div className="mt-16 border-t border-slate-200 pt-12">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Values
              </span>

              <h3 className="mt-3 text-3xl font-extrabold text-[#0b2d4f]">
                What guides our work.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              The principles behind every relationship, solution,
              and result we deliver.
            </p>

          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Integrity",
              "Professionalism",
              "Innovation",
              "Excellence",
            ].map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <span className="font-semibold text-[#0b2d4f]">
                  {value}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
   </div>
  );
}