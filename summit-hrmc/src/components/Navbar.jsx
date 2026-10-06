import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services", dropdown: true },
  { name: "Contact Us", href: "#contact" },
  { name: "Trainings", href: "#trainings" },
  { name: "Jobs", href: "#jobs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <a href="#" onClick={closeMenu}>
        <img src={Logo} alt="Summit HRMC" className="logo" />
      </a>

      {/* Desktop Navigation */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>
              {link.name}

              {link.dropdown && (
                <ChevronDown size={17} />
              )}
            </a>
          </li>
        ))}

        <li>
          <a href="#contact" className="get-in-touch">
            Get in Touch
          </a>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        className="menu-button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
          >
            <span>{link.name}</span>

            {link.dropdown && (
              <ChevronDown size={17} />
            )}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-contact"
          onClick={closeMenu}
        >
          Get in Touch
        </a>
      </div>

    </header>
  );
}