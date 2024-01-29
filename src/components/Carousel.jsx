import React, { useState } from "react";
import Card from "./Card.jsx";
import comp from "../assets/Component 3.png";
import "../components/CSS/Carousel.css";
import img from "../assets/arrow_forward_ios.svg";

const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showCard(index) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.transform = "translateX(0)";
      } else {
        card.style.transform = "translateX(100%)";
      }
    });
  }

  function nextCard() {
    setCurrentIndex((currentIndex + 1) % 3);
    showCard(currentIndex);
  }

  function next() {
    nextCard();
  }

  return (
    <div className="big-div">
      <div className="card-container">
        <div className="card">
          <Card
            EventName={"sankranthi"}
            Date={"14th January"}
            Description={"kelidoschope kite festivel"}
          />
        </div>
        <div className="card">
          <Card
            EventName={"pongal"}
            Date={"14th January"}
            Description={"kelidoschope kite festivel"}
          />
        </div>
        <div className="card">
          <Card
            EventName={"diwali"}
            Date={"14th January"}
            Description={"kelidoschope kite festivel"}
          />
        </div>
      </div>
      <img className="card-img" src={comp} />
      <img className="arrow" src={img} onClick={next} alt="Arrow icon" />
    </div>
  );
};

export default Carosel;
