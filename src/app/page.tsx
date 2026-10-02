"use client";

import { Canvas } from "@react-three/fiber";
import Game from "../game/Game";
export default function HomePage() {
  return (
    <div className="fixed inset-0">
    <Canvas 
    shadows
    camera={{ position: [10, 8, 10], fov: 60 }} 
    >
      <Game/>
      

    </Canvas>

    </div>
 );
}