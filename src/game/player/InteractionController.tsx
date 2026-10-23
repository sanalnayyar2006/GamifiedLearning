"use client";

import { useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import {useRef} from "react"
import { input } from "./Input";

import { GameState } from "../gameState";
import { useGameStore } from "../../store/GameStore";

import type { characterState } from "./systems/physics/characterState";

import {
    InteractionManager,
    InteractionWorld,
} from "../interaction";

type InteractionControllerProps = {
    characterState: RefObject<characterState>;

    interactionWorld: RefObject<InteractionWorld>;

    interactionManager: RefObject<InteractionManager>;
};

export default function InteractionController({
    characterState,
    interactionWorld,
    interactionManager,
}: InteractionControllerProps) {

    const gameState = useGameStore(
        state => state.gameState
    );

    const previousInteract = useRef(false);
    useFrame(() => {

        if (gameState !== GameState.PLAYING) {
            return;
        }

        // Update nearest interactable
        interactionManager.current.update(
            characterState.current.position,
            interactionWorld.current.getInteractables()
        );

        // Debug
        // const target =
        //     interactionManager.current.getCurrentTarget();

        // if (target) {
        //     console.log(target.id);
        // }

        // Press E
        const isInteractPressed = input.actions.interact;

        if (
            isInteractPressed &&
            !previousInteract.current
        ) {
            interactionManager.current.interact();
        }
            previousInteract.current = isInteractPressed;
        });

    return null;
}