import React from "react";
import "../components/CSS/Card.css";

const Card = ({ EventName, Date, Description }) => {
  return (
    <>
      <div
        className="flex flex-col gap-[50px]"
        style={{
          borderRadius: "40px",
          height: "414px",
          width: "377px",
          background: "linear-gradient(180deg, #6400C9 0%, #00C9C9 100%)",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "88px",
          paddingTop: "40px",
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{
            height: "auto",
            justifyContent: "center",
          }}
        >
          <span
            className="text-white"
            style={{
              color: "white",
              fontSize: 48,
              fontFamily: "Josefin Sans",
              fontWeight: "700",
              wordWrap: "break-word",
              lineHeight: "48px",
              height: "auto",
              padding: "0",
              marginBottom: "6px",
            }}
          >
            {EventName}
          </span>
          <span
            className="text-white"
            style={{
              color: "white",
              fontSize: 36,
              fontFamily: "Josefin Sans",
              fontWeight: "600",
              wordWrap: "break-word",
              paddingLeft: "20px",
              paddingRight: "20px",
              lineHeight: "36px",
            }}
          >
            {Date}
          </span>
        </div>
        <div
          style={{
            marginLeft: "50px",
            width: "auto",
            height: "auto",
            color: "white",
            fontSize: 36,
            fontFamily: "Josefin Sans",
            fontWeight: "600",
            wordWrap: "break-word",
            lineHeight: "36px",
          }}
        >
          {Description}
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            marginLeft: "103px",
            height: "46px",
            width: "203px",
            background: "linear-gradient(90deg, #FD00B6 0%, #5100FD 100%)",
            borderRadius: 11,
          }}
        >
          <button
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "Josefin Sans",
              fontWeight: "600",
              height: "46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
