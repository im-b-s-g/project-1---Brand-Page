/* eslint-disable react/prop-types */
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

const BodyComp = ({ onChange, score, click, count, updateCount, message }) => {
  const dict = [dice1, dice2, dice3, dice4, dice5, dice6];

  const showRules = () => {
    if (visiblityHidden === null) {
      setVisiblity(
        <div>
          <h2>How to play dice game ?</h2>
          <p>1. Select any number first</p>
          <p>2. Then click on dice to Roll it.</p>
          <p>
            3. After clicking on dice if selected number is equal to dice number
            you will gain the<b> dice amount(₹) </b>.
          </p>
          <p>
            4. If the number you selected doesn&apos;t match the number on the
            dice, You will loose <b> ₹1 </b>
          </p>
          <p>
            5. You need to earn more than <b>₹10</b> in 3 chances{" "}
          </p>
          <p>
            6. Bonus of ₹100 will be added if you earned more than or equal to
            ₹10 in 3 chances
          </p>
          <p>
            7. You can start over any time by pressing the <b>RESET</b> button
          </p>
          <p> 8. Now that you have understood the rules, Let&apos;s Begin!</p>
        </div>
      );
    } else setVisiblity(null);
  };

  const [visiblityHidden, setVisiblity] = useState(null);
  const [dice, newDice] = useState(dice1);

  const randomDice = () => {
    const randomIndex = Math.floor(Math.random() * dict.length);
    if (click(score, randomIndex)) {
      newDice(dict[randomIndex]);
    }
  };

  const resetScore = () => {
    if (count !== 3) {
      onChange(0);
      updateCount(0);
    }
    if (count === 3) {
      message("You have been ELIMINATED due to UFM");
      onChange(0);
      updateCount(0);
    }
  };

  return (
    <div className="body-component">
      <div className="b-up">
        <button className="die" onClick={randomDice}>
          <img src={dice} alt="die" width={200} />
        </button>
        <p>Click on Dice to roll</p>
        <p>
          <b>Chance No: {count} </b>
        </p>
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
