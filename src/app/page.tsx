"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "../game/world/Scene";
import { OrbitControls } from '@react-three/drei'

export default function HomePage() {
  return (
    <div className="fixed inset-0">
    <Canvas 
    shadows
    camera={{ position: [10, 8, 10], fov: 60 }} 
    >
      <Scene />
    <OrbitControls target = {[0,0,0]}/>

    </Canvas>

    </div>
 );
}