/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { updateValue, totalScore } from "../score";
import "./top.css";

const Top = () => {
  var error = "";

  var score = 0;

  return (
    <div className="top-comp">
      <div className="top-left">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>

      <div className="top-right">
        <p id="alertText">{error}</p>
        <div className="options">
          <input
            type="radio"
            id="1"
            value="1"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="1">
            <p>1</p>
          </label>

          <input
            type="radio"
            id="2"
            value="2"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="2">
            <p>2</p>
          </label>

          <input
            type="radio"
            id="3"
            value="3"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="3">
            <p>3</p>
          </label>

          <input
            type="radio"
            id="4"
            value="4"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="4">
            <p>4</p>
          </label>

          <input
            type="radio"
            id="5"
            value="5"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="5">
            <p>5</p>
          </label>

          <input
            type="radio"
            id="6"
            value="6"
            name="choice"
            className="input-hidden"
          />
          <label htmlFor="6">
            <p>6</p>
          </label>
        </div>
        <p>Select A Number</p>
      </div>
    </div>
  );
};

export default Top;
