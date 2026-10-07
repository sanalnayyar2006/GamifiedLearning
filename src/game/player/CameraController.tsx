"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import { mouseInput } from "./mouseInput";
import {GameState} from "../gameState";
import { useGameStore } from "../../store/GameStore";
import type { characterState } from "./systems/physics/characterState";
type CameraControllerProps = {
  characterState:RefObject<characterState>;
};

const MOUSE_SENSITIVITY = 0.008;
const CAMERA_DISTANCE = 10;

export default function CameraController({
  characterState,
}: CameraControllerProps) {
  const { camera } = useThree();

  const yaw = useRef(Math.PI);
  const pitch = useRef(-0.4);

  const direction = useRef(new THREE.Vector3());
  const targetPosition = useRef(new THREE.Vector3());
  const gameState = useGameStore(
      (state) => state.gameState
  );

  useFrame(() => {
    if (gameState !== GameState.PLAYING) {
    return;
      }

    // Update camera angles
    yaw.current -= mouseInput.deltaX * MOUSE_SENSITIVITY;
    pitch.current -= mouseInput.deltaY * MOUSE_SENSITIVITY;

    // Limit vertical angle
    pitch.current = THREE.MathUtils.clamp(
      pitch.current,
      -1.2,
      0.5
    );

    // Reset mouse input
    mouseInput.deltaX = 0;
    mouseInput.deltaY = 0;

    // Convert yaw & pitch into a direction vector
    direction.current.set(
      Math.sin(yaw.current) * Math.cos(pitch.current),
      Math.sin(pitch.current),
      Math.cos(yaw.current) * Math.cos(pitch.current)
    );

    // Camera position
    targetPosition
    .current
    .copy(characterState.current.position)
    .sub(direction.current.clone().multiplyScalar(CAMERA_DISTANCE));

    camera.position.copy(targetPosition.current);

    // Look at player's upper body
    camera.lookAt(
      characterState.current.position.x,
      characterState.current.position.y + 1.5,
      characterState.current.position.z
    );
  });

  return null;
}