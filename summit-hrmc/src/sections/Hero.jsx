import { ArrowRight, Play } from "lucide-react";
import "./hero.css";
import kids from "../assets/kids.jpg"
export default function Hero() {
  return (
<section className="hero">
  <div className="hero-content">
    <div className="content-left">
      <h1>Empowering People. Strenghtening brands</h1>
    <p>
      From talent placement to team development and strategic marketing,
      we help businesses grow—and people thrive.
    </p>

    <div className="hero-buttons">
      <button>Explore Our Services</button>
      <button>Trainings</button>
    </div>
    </div>
    <div className="content-right">
      <img src={kids} alt="" srcset="" />
    </div>
  </div>
</section>
  );
}