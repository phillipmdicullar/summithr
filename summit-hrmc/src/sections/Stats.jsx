import "./stats.css";

const stats = [
  {
    number: "500+",
    label: "Professionals Placed",
  },
  {
    number: "100+",
    label: "Businesses Served",
  },
  {
    number: "50+",
    label: "Training Programs",
  },
  {
    number: "5+",
    label: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <div className="stats">
      <section className="bg-[#0b2d4f] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">

          {/* Text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Our Impact
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              People and businesses
              <span className="text-blue-400"> moving forward.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/70">
              Our work is measured by the people we empower, the
              businesses we support, and the lasting relationships
              we build.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0b2d4f] p-7 sm:p-9"
              >
                <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {stat.number}
                </p>

                <p className="mt-2 text-sm text-blue-100/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
    </div>
  );
}