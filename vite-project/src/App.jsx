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

const App = () => {
  return <div>{Header()}</div>;
};

export default App;
