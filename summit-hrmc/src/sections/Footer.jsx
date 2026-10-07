import Logo from "../assets/Logo.png";
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Trainings", href: "#trainings" },
  { name: "Jobs", href: "#jobs" },
];

const serviceLinks = [
  "Talent Placement",
  "HR Consulting",
  "Corporate Training",
  "Team Development",
  "Strategic Marketing",
  "Recruitment Support",
];

export default function Footer() {
  return (
    <footer className="bg-[#071d32] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <img
              src={Logo}
              alt="Summit Human Resource & Marketing Consultant"
              className="h-16 w-auto object-contain"
            />

            <h3 className="mt-6 text-xl font-bold">
              Summit Human Resource
              <br />
              & Marketing Consultant
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100/60">
              Empowering people, strengthening brands, and helping
              organizations build a stronger future.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100/70 transition duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100/70 transition duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100/70 transition duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100/70 transition duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-100/60 transition duration-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h4>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-blue-100/60 transition duration-300 hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL"
                className="flex gap-3 text-sm text-blue-100/60 transition duration-300 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  YOUR EMAIL
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:YOUR_PHONE"
                className="flex gap-3 text-sm text-blue-100/60 transition duration-300 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  YOUR PHONE
                </span>
              </a>

              {/* Address */}
              <div className="flex gap-3 text-sm text-blue-100/60">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  YOUR OFFICE ADDRESS
                </span>
              </div>

            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition duration-300 hover:text-blue-300"
            >
              Get in touch

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-blue-100/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Summit Human Resource & Marketing
            Consultant. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}