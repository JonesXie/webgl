import "./App.css";
import { useEffect } from "react";
// import demo from "./demo/01-初识.js";
import demo from "./demo/02-绘图步骤.js";

function App() {
  useEffect(demo, []);
  return <canvas id="canvas"></canvas>;
}

export default App;
