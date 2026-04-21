import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

import HeroImage from "../assets/images/tatry.jpg";

export default function HomePage() {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div className={`homepage-container ${isDarkMode && "dark"}`}>
      <div className="hero-content">
        <h1 className="homepage-title">Discover the Polish Tatras</h1>
        <p className="homepage-description">
          Your personal guide to the Polish Tatras. Choose routes by difficulty
          level, save your favorite trails, and find the perfect company for
          mountain adventures.
        </p>
        <Link className="routes-link" to={"/routes"}>
          Explore Trails
        </Link>
      </div>
    </div>
  );
}
