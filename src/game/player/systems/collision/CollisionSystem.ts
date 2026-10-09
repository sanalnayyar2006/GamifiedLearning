import type {characterState} from "../physics/characterState";
import type { GroundInfo } from "../ground/GroundInfo";

export function updateCollision(
    state: characterState,
    groundInfo: GroundInfo
) {
    state.isGrounded = groundInfo.isGrounded;

    if (!groundInfo.isGrounded) {
        return;
    }

    state.position.y = groundInfo.groundHeight;
    state.verticalVelocity = 0;
}
