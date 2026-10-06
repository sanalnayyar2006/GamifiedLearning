import * as THREE from "three";

import type { characterState } from "./physics/characterState";

import { calculateMovement } from "./movement/movementSystem";
import { updateRotation } from "./rotation/rotationSystem";
import { updatePhysics } from "./physics/physicsSystem";

import type { MovementResult } from "./movement/movementSystem";

export function updateCharacter(
    state: characterState,
    camera: THREE.Camera,
    delta: number
): MovementResult {

    // 1. Read player input & calculate desired movement
    const movement = calculateMovement(camera);

    // 2. Update velocity
    state.velocity.copy(movement.velocity);

    // 3. Update facing direction
    updateRotation(
        state,
        movement,
        delta
    );

    // 4. Update physics
    updatePhysics(
        state,
        delta
    );

    // 5. Return movement data
    return movement;
}