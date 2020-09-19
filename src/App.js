import React, { useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/disp3.jpg";
import "./shaders/Fade";
import "./styles.css";

export default function App() {
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    img1,
    img2,
    img3
  ]);
  const [hovered, setHover] = useState(false);
  const { progress } = useSpring({ progress: hovered ? 1 : 0 });
  return (
    <Canvas>
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
        <a.fade
          attach="material"
          texture={texture1}
          texture2={texture2}
          disp={dispTexture}
          dispFactor={progress}
        />
      </mesh>
    </Canvas>
  );
}
