import React from "react";
import "./form.css";
import { useState } from "react";

const form = () => {
  const [name, setName] = useState("brahm");
  const sub = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
  };
  return (
    <div className="forminputs">
      <form onSubmit={sub} id="ffoorm">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" size={33} />

        <label htmlFor="Texts">TEXT</label>
        <textarea type="text" id="Texts" rows="5" />

        <button className="button-4">SUBMIT</button>
      </form>
      <div>{"Made by: " + name}</div>
    </div>
  );
};

export default form;
