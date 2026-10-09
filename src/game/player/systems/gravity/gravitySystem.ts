import type { characterState } from "../physics/characterState";

const GRAVITY = 25;

export function updateGravity(
    state: characterState,
    delta: number
) {

    if (state.isGrounded) {
        state.verticalVelocity = 0;
        return;
    }

    // Apply gravity (acceleration)
    state.verticalVelocity -= GRAVITY * delta;

}