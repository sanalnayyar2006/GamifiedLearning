import type {characterState} from "./characterState"
export function updatePhysics(
    state: characterState,
    delta: number
){
    state.position.addScaledVector(
        state.velocity,
        delta
    )
}
