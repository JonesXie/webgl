import * as THREE from "three";

export default function fnc() {
  const canvas = document.querySelector("#canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const gl = canvas.getContext("webgl");
  gl?.clearColor(1, 0, 0, 1);
  gl?.clear(gl?.COLOR_BUFFER_BIT);

  const color = new THREE.Color("rgba(255,0,0,1)");
  function drawColor() {
    color.offsetHSL(0.005, 0, 0);
    gl?.clearColor(color.r, color.g, color.b, 1);
    gl?.clear(gl?.COLOR_BUFFER_BIT);
    window.requestAnimationFrame(drawColor);
  }
  drawColor();
}
