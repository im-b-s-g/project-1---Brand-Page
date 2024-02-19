/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./top.css";

const Top = ({ score, radioSelected, errors }) => {
  const handleSelection = (e) => {
    radioSelected(e.target.value);
    e.target.checked = true;
  };

  const handleCurrency = () => {
    if (score < 0) return "-₹" + -score;
    else return "₹" + score;
  };

  return (
    <div className="top-comp">
      <div className="top-left">
        <h1>{handleCurrency()}</h1>
        <p>Total Earnings</p>
      </div>

      <div className="top-right">
        <p id="alertText">{errors}</p>

        <div className="options">
          <input
            type="radio"
            id="1"
            value="1"
            name="choice"
            onChange={handleSelection}
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
            onChange={handleSelection}
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
            onChange={handleSelection}
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
            onChange={handleSelection}
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
            onChange={handleSelection}
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
            onChange={handleSelection}
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
