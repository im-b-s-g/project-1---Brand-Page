/* eslint-disable no-unused-vars */
import React from "react";
import "./mainstyle.css";
import service from "../../src/assets/Service 24_7-pana 1.svg";
import phone from "../../src/assets/phone.png";
import blackChat from "../../src/assets/black.png";
import whiteChat from "../../src/assets/white.png";
import FORMs from "../detailForm/ffoorrms";

const Heading = () => {
  return (
    <div className="Container">
      <div className="textContent">
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="form">
        <div className="form-left">
          <div className="buttons">
            <div className="button-1">
              <img src={whiteChat} alt="chatimg" />
              Via SUPPORT CHAT
            </div>
            <div className="button-1">
              <img src={phone} alt="phoneimg" /> VIA CALL
            </div>
          </div>

          <div className="button-1 button-2 ">
            <img src={blackChat} alt="" />
            VIA E-MAIL FORM
          </div>
          <FORMs />
          <button className="button-4">SUBMIT</button>
        </div>

        <div className="img-right">
          <img src={service} alt="serviceImg" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
