import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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

  return (
    <>
        <nav className="navbar">
            <h3>Summit HRMC</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us <ChevronDown /></a></li>
                <li><a href="#trainings">Trainings</a></li>
                <li><a href="#jobs">Jobs</a></li>
                <li><a href="#" className="get-in-touch">Get in Touch</a></li>
            </ul>
        </nav>
    </>
  );
}
