import "./App.css";
import Header from "./components/Start/Home";
import Main from "./components/state/Game";
import { useState } from "react";
function App() {
  const [clicked, updateClick] = useState(0);

  const render = () => {
    if (!clicked) return <Header clicked={updateClick} />;
    else return <Main />;
  };

  return <div>{render()}</div>;
}

export default App;
