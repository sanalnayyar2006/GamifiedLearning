import type {characterState} from "../physics/characterState"
// import {input} from "../../Input"
const JUMP_FORCE = 10;
export function updateJump(
    state: characterState,
    jumpPressed: boolean
) {
    

    if (!jumpPressed) return;
    if (!state.isGrounded) return;

    state.verticalVelocity = JUMP_FORCE;
    state.isGrounded = false;
    state.isJumping = true;
    state.isFalling = false;

    
}