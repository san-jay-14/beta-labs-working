import React from "react";
import "../components/CSS/Card.css";

const Card = ({ EventName, Date, Description }) => {
  return (
    <>
      <div className=" card-div flex flex-col gap-[50px] justify-center w-[377px] h-[414px] pb-[88px] pt-[40px] rounded-[40px]">
        <div className="flex flex-col items-center justify-center  h-[auto]">
          <span className="event-name-div">{EventName}</span>
          <span className="date-div">{Date}</span>
        </div>
        <div className="desc-div">{Description}</div>
        <div className="flex items-center justify-center btn-div">
          <button>REGISTER</button>
        </div>
      </div>
    </>
  );
};

export default Card;
