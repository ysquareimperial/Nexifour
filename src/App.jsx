import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nexifourLogo from "../src/assets/Nexifour.PNG";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <img src={nexifourLogo} className="logo" alt="Vite logo" />
      </div>
      <h2>Nexifour LLC</h2>
      <div className="card">
        <p>Website under construction.</p>
      </div>
    </>
  );
}

export default App;
