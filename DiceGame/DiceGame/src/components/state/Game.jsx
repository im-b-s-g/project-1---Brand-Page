/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Top from "../topselect/Top";
import Body from "../BodyComp/BodyComp";
import "./game.css";

const Main = () => {
  const [score, updateScore] = useState(0);
  const [radioSelect, radioSelected] = useState(null);
  const [errors, errorUpdate] = useState("");
  const [count, updateCount] = useState(0);
  const [message, updateMessage] = useState("");
  const [butname, updateButton] = useState("try Again?");
  const handleGame = () => {
    updateMessage("");
    updateScore(0);
  };

  const diceClicked = (score, randomIndex) => {
    if (message === "") {
      if (radioSelect === null) {
        errorUpdate("Please Select a Number first");
        return false;
      } else if (Number(radioSelect) === Number(randomIndex + 1)) {
        errorUpdate("");
        var a = score + randomIndex + 1;
        updateScore(a);
      } else {
        errorUpdate("");
        var b = score - 1;
        updateScore(b);
      }

      updateCount(count + 1);
      if (count === 3) {
        if (score < 10) {
          updateCount(0);
          updateScore(0);
          updateMessage("You LOST! Better Luck next Time");
          return false;
        } else {
          updateCount(0);
          var c = score + 100;
          updateScore(c);
          updateMessage("You Won! Congratulations");
          updateButton("Play Again?");
          return false;
        }
      }
    } else if (message !== "" && count === 0) return false;

    return true;
  };

  const visible = () => {
    if (message === "") return false;
    else
      return (
        <button onClick={handleGame} className="buttontry">
          {butname}
        </button>
      );
  };

  return (
    <div>
      <Top
        score={score}
        radioSelected={radioSelected}
        errors={errors}
        errorUpdate={errorUpdate}
      />
      <Body
        onChange={updateScore}
        score={score}
        click={diceClicked}
        count={count}
        updateCount={updateCount}
        message={updateMessage}
      />
      <div className="tryAgain">
        <h3>{message}</h3>
        {visible()}
      </div>
    </div>
  );
};

export default Main;
