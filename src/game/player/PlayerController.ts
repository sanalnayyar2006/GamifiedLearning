"use client";
import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import * as THREE from "three";

import {GameState} from "../gameState"
import { useGameStore } from "../../store/GameStore";
import type { characterState } from "./systems/physics/characterState";
import {updateCharacter} from "./systems/characterOrchestrator"

type PlayerControllerProps = {
    playerRef: RefObject<THREE.Group | null>;
    characterState: RefObject<characterState>;
    groundRef: RefObject<THREE.Mesh | null>;
};



export default function PlayerController({
    playerRef,
    characterState,
    groundRef,
}: PlayerControllerProps) {
    const gameState = useGameStore(
    (state) => state.gameState
);
    useFrame(({ camera }, delta) => {

    if (
        !playerRef.current ||
        gameState !== GameState.PLAYING
    ) return;

    const player = playerRef.current;

    updateCharacter(
        characterState.current,
        camera,
        groundRef.current,
        delta
    );

    player.position.copy(
        characterState.current.position
    );

    player.rotation.y =
        characterState.current.rotation;

    });
    return null
}

    