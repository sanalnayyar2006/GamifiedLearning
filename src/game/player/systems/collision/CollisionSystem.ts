import type { characterState } from "../physics/characterState";
import type { GroundInfo } from "../ground/GroundInfo";

const FOOT_OFFSET = 0.005;
const SNAP_DISTANCE = 0.15;

export function updateCollision(
    state: characterState,
    groundInfo: GroundInfo
) {
    if (!groundInfo.hasGround) {
        state.isGrounded = false;
        return;
    }

    const targetY = groundInfo.groundHeight + FOOT_OFFSET;

    // Don't snap while moving upward
    if (state.verticalVelocity > 0) {
        state.isGrounded = false;
        return;
    }

    // Snap when close enough to the ground
    if (state.position.y <= targetY + SNAP_DISTANCE) {
        state.position.y = targetY;
        state.verticalVelocity = 0;
        state.isGrounded = true;
    } else {
        state.isGrounded = false;
    }
}