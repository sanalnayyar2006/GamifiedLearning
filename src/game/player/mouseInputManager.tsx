"use client";

import { useEffect } from "react";
import { mouseInput } from "./mouseInput";
import {useThree} from "@react-three/fiber";
import { useGameStore } from "../../store/GameStore";
import {GameState} from "../gameState"
import {setGameCanvas,requestGamePointerLock} from "./pointerLock"
export default function MouseInputManager(){
    const {gl} = useThree();
    const setGameState = useGameStore(
    (state) => state.setGameState
    );

    useEffect(()=>{
     
        const handleMouseMove = (event:MouseEvent)=>{
            if(document.pointerLockElement !== canvas)return;

            mouseInput.deltaX += event.movementX;
            mouseInput.deltaY += event.movementY;
        };
        
     
        const canvas = gl.domElement;
        setGameCanvas(canvas)
        const handleClick = ()=>{
            requestGamePointerLock();
        }
        

        const handlePointerLockChange=()=>{
            if(document.pointerLockElement=== canvas){ 
               setGameState(GameState.PLAYING)
            } else{
                setGameState(GameState.PAUSED)
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
        

    },[gl,setGameState]);
    
    return null 
    
}