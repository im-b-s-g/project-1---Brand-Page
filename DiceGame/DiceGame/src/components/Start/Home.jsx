import React from "react";
import homeDiceImg from "../../assets/dices 1.png";
import "./home.css";

const Header = () => {
  return (
    <div className="main">
      <div className="left">
        <img src={homeDiceImg} alt="DiCeImgHome" />
      </div>
      <div className="right">
        <h1>DICE GAME </h1>
        <button className="button-1">PLAY NOW</button>
      </div>
    </div>
  );
};

export default Header;
