import * as THREE from "three";

import type { characterState } from "./physics/characterState";

import { calculateMovement } from "./movement/movementSystem";
import type { MovementResult } from "./movement/movementSystem";
import {input} from "../Input" 
import { updateRotation } from "./rotation/rotationSystem";
import { updatePhysics } from "./physics/physicsSystem";
import { updateGravity } from "./gravity/GravitySystem";
import { updateCollision } from "./collision/CollisionSystem";
import { detectGround } from "./ground/GroundDetection";
import {updateJump} from "./jump/JumpSystem"

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

    // 4. Update rotation
    updateRotation(
        state,
        movement,
        delta
    );




updateGravity(
    state,
    delta
);



updatePhysics(
    state,
    delta
);


const groundInfo = ground
    ? detectGround(state, ground)
    : {
        hasGround: false,
        isGrounded: false,
        groundHeight: 0,
    };


    updateCollision(
        state,
        groundInfo
    );


    

    return movement;
}