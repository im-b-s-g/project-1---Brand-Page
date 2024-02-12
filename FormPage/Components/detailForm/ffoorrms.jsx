import React from "react";
import "./form.css";

const form = () => {
  return (
    <div className="forminputs">
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" />

        <label htmlFor="" id="email">
          E-mail
        </label>
        <input type="text" id="email" size={33} />

        <label htmlFor="texts">TEXT</label>
        <textarea type="text" id="texts" rows="5" />
      </form>
    </div>
  );
};

export default form;
