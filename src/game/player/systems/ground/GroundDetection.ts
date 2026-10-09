import * as THREE from "three";
import type { characterState } from "../physics/characterState";
import type { GroundInfo } from "./GroundInfo";

const raycaster = new THREE.Raycaster();
const down = new THREE.Vector3(0, -1, 0);

export function detectGround(
    state: characterState,
    ground: THREE.Object3D
): GroundInfo {

    // Start the ray slightly above the player's feet
    const origin = state.position.clone();
    origin.y += 0.2;

    raycaster.set(origin, down);

    // Detect only within 2 units below the player
    raycaster.far = 2;

    const hits = raycaster.intersectObject(ground, true);


    if (hits.length === 0) {
        return {
            isGrounded: false,
            groundHeight: 0,
        };
    }

    return {
        isGrounded: true,
        groundHeight: hits[0].point.y,
    };
}