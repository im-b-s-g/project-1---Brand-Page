// eslint-disable-next-line no-unused-vars
import React from "react";
import homeDiceImg from "../../assets/dices 1.png";
import "./home.css";

// eslint-disable-next-line react/prop-types
const Header = ({ clicked }) => {
  const HandleClick = () => {
    clicked(1);
  };
  return (
    <div className="main">
      <div className="left">
        <img src={homeDiceImg} alt="DiCeImgHome" />
      </div>
      <div className="right">
        <h1>DICE GAME </h1>
        <button className="button-1" onClick={HandleClick}>
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
