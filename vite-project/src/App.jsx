import React from "react";
import "./App.css";

function Header() {
  return (
    <nav>
      <div className="Logo">
        <img src="../src/assets/brand_logo.png" alt="Logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="Login">Login</button>
    </nav>
  );
}

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          Your feet deserve the best and we are here to help you with our shoes.
          Your feet deserve the best and we are here to help you with our shoes.{" "}
        </p>

        <div className="buttons">
          <button className="Category1">Shop Now</button>
          <button className="Category">Category</button>
        </div>

        <p>Also Available On</p>
        <img src="../src/assets/shops.png" alt="E-seller icon" />
      </div>
      <div className="main-right">
        <img src="../src/assets/shoe_image.png" alt="" className="shoe" />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      {Header()}
      {Main()}
    </div>
  );
};

export default App;
