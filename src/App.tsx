import "./App.css";
import { useEffect } from "react";
import * as THREE from "three";

function App() {
  useEffect(() => {
    console.log(11);
    const canvas = document.querySelector("#canvas");
    (canvas as HTMLCanvasElement).width = window.innerWidth;
    (canvas as HTMLCanvasElement).height = window.innerHeight;
    const gl = (canvas as HTMLCanvasElement).getContext("webgl");
    gl?.clearColor(1, 0, 0, 1);
    gl?.clear(gl?.COLOR_BUFFER_BIT);

    const color = new THREE.Color("rgba(255,0,0,1)");
    function drawColor() {
      color.offsetHSL(0.005, 0, 0);
      gl?.clearColor(color.r, color.g, color.b, 1);
      gl?.clear(gl?.COLOR_BUFFER_BIT);
      // window.requestAnimationFrame(drawColor);
    }
    drawColor();
  }, []);
  return <canvas id="canvas"></canvas>;
}

export default App;
