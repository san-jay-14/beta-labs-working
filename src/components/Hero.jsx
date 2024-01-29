import React from "react";
import action_key from "../assets/action_key.svg";
import betalabs from "../assets/betalabs.png";
import Carousel from "./Carousel";
import "./CSS/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="flex-container">
        <div className="text-section">
          {/* First section */}
          <div className="title">
            <div className="gradient-text">DISCOVER, ENGAGE, and ELEVATE</div>
          </div>

          {/* Second section */}
          <div className="search-section">
            <div className="gradient-mask"></div>
            <input
              type="text"
              placeholder="search the events"
              className="search-input"
            />
            <div className="divider"></div>
            <div className="action-key">
              <img src={action_key} alt="Action Key" />
            </div>
          </div>

          {/* Third section */}
          <div className="description">
            Your Gateway to Unforgettable College Events!
          </div>
        </div>

        <div className="upcoming-events">
          <div className="upcoming-title">UPCOMING</div>
          <div className="carousel-container">
            <Carousel />
          </div>
        </div>
      </div>
      {/* BETA LABS */}
      <div className="xyz-container">
        <div className="abc-container">
          <img src={betalabs} className="random-image" alt="Beta Labs" />
          <div className="random-text">
            <div className="random-title">Beta Lab's</div>
            <div className="random-white-text">Android Development</div>
            <div className="random-gray-text">
              HERE IS THE PARAGRAPH OF BETA LABS
            </div>
            <button className="random-button">
              <span className="random-gradient"></span>
              <span className="random-button-text">Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
