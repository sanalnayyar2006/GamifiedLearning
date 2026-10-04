import * as THREE from "three";
import { input } from "../Input";

export type MovementResult = {
    direction: THREE.Vector3;
    speed: number;
    isMoving: boolean;
    isSprinting: boolean;
    targetRotation: number | null;
};

const WALK_SPEED = 5;
const SPRINT_SPEED = 15;

export function calculateMovement(
    camera: THREE.Camera,
): MovementResult {
    const direction = new THREE.Vector3()
    const cameraDirection = new THREE.Vector3();
    const cameraRight = new THREE.Vector3();
    
    const currentSpeed = input.actions.sprint ? SPRINT_SPEED : WALK_SPEED;

    camera.getWorldDirection(cameraDirection);
        cameraDirection.y=0;
        cameraDirection.normalize();
       
        cameraRight.crossVectors(
            cameraDirection,
            camera.up
        )

        
        if(input.movement.forward){
            direction.add(cameraDirection);
        };
        if(input.movement.backward){
            direction.sub(cameraDirection)
        };
        if(input.movement.right){
            direction.add(cameraRight)    
        };

        if(input.movement.left){
            direction.sub(cameraRight)          //we are using sub to oppose the movement direction (0,0,-1)->(0,0,1)
        };
        const isMoving = direction.lengthSq() > 0;

        if(isMoving){
            direction.normalize()
        }
        const targetRotation =
            isMoving ? Math.atan2(
                -direction.x,
                -direction.z
          )
        : null;

    return {
        direction,
        speed: currentSpeed,
        isMoving: isMoving,
        isSprinting: input.actions.sprint,
        targetRotation
    };
}