/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./bodyComp.css";
import dice1 from "../../assets/dice_1.png";
import dice2 from "../../assets/dice_2.png";
import dice3 from "../../assets/dice_3.png";
import dice4 from "../../assets/dice_4.png";
import dice5 from "../../assets/dice_5.png";
import dice6 from "../../assets/dice_6.png";
import { updateValue, totalScore } from "../score";

const BodyComp = (props) => {
  const dict = [dice1, dice2, dice3, dice4, dice5, dice6];

  const showRules = () => {
    if (visiblityHidden === null) {
      setVisiblity(
        <div>
          <h2>How to play dice game</h2>
          <p>1. Select any number</p>
          <p>2. Click on dice image</p>
          <p>
            3. After click on dice if selected number is equal to dice number
            you will get same point as dice
          </p>
          <p>4. If you get wrong guess then 2 point will be dedcuted </p>
        </div>
      );
    } else setVisiblity(null);
  };

  const [visiblityHidden, setVisiblity] = useState(null);
  const [dice, newDice] = useState(dice1);

  const randomDice = () => {
    const randomIndex = Math.floor(Math.random() * dict.length);
    newDice(dict[randomIndex]);
  };

  const resetScore = () => {};

  return (
    <div className="body-component">
      <div className="b-up">
        <button className="die" onClick={randomDice}>
          <img src={dice} alt="die" width={200} />
        </button>
        <p>Click on Dice to roll </p>
        <button className="button1" onClick={resetScore}>
          Reset Score
        </button>
        <button className="button1 button2" onClick={showRules}>
          Show Rules
        </button>
      </div>
      <div className="b-down">{visiblityHidden}</div>
    </div>
  );
};

export default BodyComp;
