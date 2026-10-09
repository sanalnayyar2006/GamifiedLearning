import * as THREE from "three";

import type { characterState } from "./physics/characterState";

import { calculateMovement } from "./movement/movementSystem";
import type { MovementResult } from "./movement/movementSystem";

import { updateRotation } from "./rotation/rotationSystem";
import { updatePhysics } from "./physics/physicsSystem";
import { updateGravity } from "./gravity/GravitySystem";
import { updateCollision } from "./collision/CollisionSystem";
import { detectGround } from "./ground/GroundDetection";

export function updateCharacter(
    state: characterState,
    camera: THREE.Camera,
    ground: THREE.Object3D | null,
    delta: number
): MovementResult {

    // 1. Read player input
    const movement = calculateMovement(camera);

    // 2. Update horizontal velocity
    state.velocity.copy(movement.velocity);

    // 3. Detect ground
   const groundInfo = ground
    ? detectGround(state, ground)
    : {
        isGrounded: false,
        groundHeight: 0,
    };

    // 4. Update rotation
    updateRotation(
        state,
        movement,
        delta
    );

    // 5. Apply gravity
    updateGravity(
        state,
        delta
    );

    // 6. Move character
    updatePhysics(
        state,
        delta
    );

    // 7. Resolve collision
    updateCollision(
        state,
        groundInfo
    );

    return movement;
}