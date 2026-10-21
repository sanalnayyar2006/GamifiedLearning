import type {characterState} from "../physics/characterState"
// import {input} from "../../Input"
const JUMP_FORCE = 10;
export function updateJump(
    state: characterState,
    jumpPressed: boolean
) {
    console.log("Before Jump", {
        jumpPressed,
        grounded: state.isGrounded,
        velocity: state.verticalVelocity,
    });

    if (!jumpPressed) return;
    if (!state.isGrounded) return;

    state.verticalVelocity = JUMP_FORCE;
    state.isGrounded = false;
    state.isJumping = true;
    state.isFalling = false;

    console.log("After Jump", {
        grounded: state.isGrounded,
        velocity: state.verticalVelocity,
    });
}