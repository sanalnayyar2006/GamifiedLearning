"use client";
import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import * as THREE from "three";

import { input } from "./Input";

const WALK_SPEED = 5;
const ROTATION_SPEED = 7;

type PlayerControllerProps = {
    playerRef: RefObject<THREE.Group | null>
}

export default function PlayerController({
    playerRef,
}: PlayerControllerProps){
    useFrame(({camera},delta)=>{
        if(!playerRef.current) return;
        const player = playerRef.current


        const direction = new THREE.Vector3()

        const cameraDirection = new THREE.Vector3();

        camera.getWorldDirection(cameraDirection);
        cameraDirection.y=0;
        cameraDirection.normalize();


        const cameraRight = new THREE.Vector3();
        cameraRight.crossVectors(
            cameraDirection,
            camera.up
        )
        
        if(input.movement.forward){
            direction.add(cameraDirection);
        };
        if(input.movement.backward){
            direction.add(cameraDirection)
        };
        if(input.movement.right){
            direction.add(cameraRight)
        };
        if(input.movement.left){
            direction.add(cameraRight)
        };

        if(direction.lengthSq()>0){
            direction.normalize()
            

            const targetRotation = Math.atan2(
                -direction.x,
                -direction.z
                
            );

            player.rotation.y = THREE.MathUtils.damp(
                player.rotation.y,
                targetRotation,
                ROTATION_SPEED,
                delta
            );

            player.position.addScaledVector(
                direction,
                WALK_SPEED*delta
            );
        };
    })
}

    // useFrame((_,delta)=>{
    //     if(!playerRef.current) return;
    //     const player = playerRef.current

    //     if(input.movement.forward){
    //         player.rotation.y=0
    //         player.position.z-=WALK_SPEED*delta

    //     };
    //     if(input.movement.backward){
    //         player.rotation.y= Math.PI
    //         player.position.z+=WALK_SPEED*delta
    //     };
    //     if(input.movement.right){
    //         player.rotation.y = -Math.PI/2
    //         player.position.x+=WALK_SPEED*delta
    //     };
    //     if(input.movement.left){
    //         player.rotation.y = Math.PI/2
    //         player.position.x-=WALK_SPEED*delta
    //     };
        
    // })

