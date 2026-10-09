import type {characterState} from "./characterState"
export function updatePhysics(
    state: characterState,
    delta: number
) {
    // Horizontal movement
    state.position.addScaledVector(
        state.velocity,
        delta
    );

    // Vertical movement
    state.position.y += state.verticalVelocity * delta;
}