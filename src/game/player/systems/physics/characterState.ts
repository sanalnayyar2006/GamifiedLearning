import * as THREE from "three";
export function createCharacterState(): characterState{
    return{
        velocity:new  THREE.Vector3(),
        position: new THREE.Vector3(0,1.5,0),
        rotation: 0,
        isJumping:true,
        isGrounded:true,
        isFalling:true

    }
}
export type characterState={
    position: THREE.Vector3,
    velocity: THREE.Vector3,
    rotation: number,
    isJumping:boolean,
    isGrounded:boolean,
    isFalling:boolean
}


