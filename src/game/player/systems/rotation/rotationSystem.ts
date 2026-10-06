import * as THREE from "three";

import type { characterState } from "../physics/characterState";
import type { MovementResult } from "../movement/movementSystem";

const ROTATION_SPEED = 7;

export function updateRotation(
  state: characterState,
  movement: MovementResult,
  delta: number 
) {
  if (!movement.isMoving) return;
  if (movement.targetRotation === null) return;

  state.rotation = THREE.MathUtils.damp(
    state.rotation,
    movement.targetRotation,
    ROTATION_SPEED,
    delta
  );
}