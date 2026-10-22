"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, type RefObject } from "react";
import * as THREE from "three";

import { GameState } from "../gameState";
import { useGameStore } from "../../store/GameStore";

import type { characterState } from "./systems/physics/characterState";
import { updateCharacter } from "./systems/characterOrchestrator";

import {
    InteractionManager,
    InteractionWorld,
} from "../interaction";

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

    // Create only once
    const interactionWorld = useRef(
        new InteractionWorld()
    );

    const interactionManager = useRef(
        new InteractionManager()
    );

    useFrame(({ camera }, delta) => {

        if (
            !playerRef.current ||
            gameState !== GameState.PLAYING
        ) {
            return;
        }

        const player = playerRef.current;

        // Character movement
        updateCharacter(
            characterState.current,
            camera,
            groundRef.current,
            delta
        );

        // Update interaction system
        interactionManager.current.update(
            characterState.current.position,
            interactionWorld.current.getInteractables()
        );

        // Debug nearest interactable
        const target =
            interactionManager.current.getCurrentTarget();

        if (target) {
            console.log(target.id);
        }

        // Apply transform to mesh
        player.position.copy(
            characterState.current.position
        );

        player.rotation.y =
            characterState.current.rotation;

    });

    return null;
}