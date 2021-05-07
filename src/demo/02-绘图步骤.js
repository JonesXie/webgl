// import * as THREE from "three";
import { initShaders } from "../utils/initSharders";

export default function fnc() {
  const canvas = document.querySelector("#canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const gl = canvas.getContext("webgl");
  // 顶点着色器
  const vsSource = `
    void main(){
      gl_Position = vec4(.5,0,0.0,1.0); // 点位，四维向量，浮点数
      gl_PointSize = 100.0; // 尺寸，浮点数（必须）
    }
  `;
  // 片元着色器
  const fsSource = `
    void main(){
      gl_FragColor = vec4(1.0,1.0,0.0,1.0); // 着色器颜色，rgba
    }
  `;

  initShaders(gl, vsSource, fsSource);

  gl?.clearColor(1, 0, 0, 1);
  gl?.clear(gl?.COLOR_BUFFER_BIT);
  gl?.drawArrays(gl.POINTS, 0, 1);
}
