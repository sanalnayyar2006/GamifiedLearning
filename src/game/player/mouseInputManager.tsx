"use client";

import { useEffect } from "react";
import { mouseInput } from "./mouseInput";
import {useThree} from "@react-three/fiber";
import {GameState,gameState} from "../gameState"
export default function MouseInputManager(){
    const {gl} = useThree();

    useEffect(()=>{
        const handleMouseMove = (event:MouseEvent)=>{
            if(document.pointerLockElement !== canvas)return;

            mouseInput.deltaX += event.movementX;
            mouseInput.deltaY += event.movementY;
        };
        
        const canvas = gl.domElement;

        const handleClick = ()=>{
            canvas.requestPointerLock();
        }

        const handlePointerLockChange=()=>{
            if(document.pointerLockElement== canvas){ 
               gameState.current = GameState.PLAYING
            } else{
                gameState.current = GameState.PAUSED
            }
            
        }

        canvas.addEventListener(
            "click",
            handleClick
        );
        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        document.addEventListener(
            "pointerlockchange",
            handlePointerLockChange
        );
        return() =>{
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            canvas.removeEventListener(
                "click",
                handleClick
            );
            document.removeEventListener(
                "pointerlockchange",
                handlePointerLockChange
            );

        }
        

    },[gl]);
    
    return null 
    
}