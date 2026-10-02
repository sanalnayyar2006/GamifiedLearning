import { useRef } from "react";
import * as THREE from "three";

import Character from "./Character";
import PlayerController from "./PlayerController";
import CameraController from "./CameraController"
export default function Player() {
  const playerRef = useRef<THREE.Group>(null);
  const cameraPivotRef = useRef<THREE.Group>(null);
  const cameraBoomRef = useRef<THREE.Group>(null);

  return (
    <group ref={playerRef} position={[0, 1.5, 0]}>
      <Character />

      <group
          ref={cameraPivotRef}
          position={[0, 1.8, 0]}
      >
          <group
              ref={cameraBoomRef}
              position={[0, 0, 8]}
          />
      </group>

      <PlayerController playerRef={playerRef} />

      <CameraController
          playerRef={playerRef}
          cameraPivotRef={cameraPivotRef}
          cameraBoomRef={cameraBoomRef}
      />
  </group>
  );
}