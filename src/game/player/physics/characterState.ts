import * as THREE from "three";
export function createCharacterState(): characterState{
    return{
        velocity:new  THREE.Vector3,
        isJumping:true,
        isGrounded:true,
        isFalling:true

    }
}
export type characterState={
    velocity: THREE.Vector3,
    isJumping:boolean,
    isGrounded:boolean,
    isFalling:boolean
}


