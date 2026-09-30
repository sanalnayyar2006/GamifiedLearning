import { useRef } from "react";
import * as THREE from "three";

import Character from "./Character";
import PlayerController from "./PlayerController";

export default function Player() {
  const playerRef = useRef<THREE.Group>(null);

  return (
    <group ref={playerRef} position={[0, 1.5, 0]}>
      <Character />
      <PlayerController playerRef={playerRef} />
      <axesHelper args={[5]} />
    </group>
  );
}