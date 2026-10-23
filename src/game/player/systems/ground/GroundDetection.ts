import * as THREE from "three";
import type { characterState } from "../physics/characterState";
import type { GroundInfo } from "./GroundInfo";

const raycaster = new THREE.Raycaster();
const down = new THREE.Vector3(0, -1, 0);

const RAY_OFFSET = 0.2;
const RAY_LENGTH = 2;
const GROUND_THRESHOLD = 0.3;

export function detectGround(
    state: characterState,
    ground: THREE.Object3D
): GroundInfo {

    const origin = state.position.clone();
    origin.y += RAY_OFFSET;

    raycaster.set(origin, down);
    raycaster.far = RAY_LENGTH;

    const hits = raycaster.intersectObject(ground, true);

    if (hits.length === 0) {
        return {
            hasGround:false,
            isGrounded: false,
            groundHeight: 0,
        };
    }
    const hit = hits[0];

    return {
        hasGround:true,
        isGrounded: hit.distance <= GROUND_THRESHOLD,
        groundHeight: hit.point.y,
    };
}

