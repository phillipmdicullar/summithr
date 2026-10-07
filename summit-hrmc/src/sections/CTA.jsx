import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./cta.css"
export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2d4f] px-7 py-14 sm:px-12 lg:px-16 lg:py-16">

          {/* Background decoration */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

            {/* Main CTA */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Let's Work Together
              </span>

              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Ready to build a
                <span className="text-blue-400"> stronger future?</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/70">
                Whether you're looking for talent, developing your
                team, or growing your brand, Summit is ready to help.
              </p>

              <a
                href="mailto:info@summithrmc.com"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Contact information */}
            <div className="space-y-4">

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-blue-100/50">
                    Email us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    info@summithrmc.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-blue-100/50">
                    Call us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    +254 XXX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-blue-100/50">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}