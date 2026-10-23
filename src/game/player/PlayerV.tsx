"use client";

import { useRef } from "react";
import type { RefObject } from "react";
import * as THREE from "three";

import Character from "./Character";
import PlayerController from "./PlayerController";
import CameraController from "./CameraController";
import { createCharacterState } from "./systems/physics/characterState";
import { InteractionManager, InteractionWorld } from "../interaction";

type PlayerProps = {
    groundRef: RefObject<THREE.Mesh | null>;

    interactionWorld: RefObject<InteractionWorld>;

    interactionManager: RefObject<InteractionManager>;
};

export default function Player({
    groundRef,
    interactionWorld,
    interactionManager,
}: PlayerProps) {
    const playerRef = useRef<THREE.Group>(null);
    const cameraPivotRef = useRef<THREE.Group>(null);
    const cameraBoomRef = useRef<THREE.Group>(null);

    const characterState = useRef(createCharacterState());

    return (
        <group ref={playerRef} position={[0, 1.5, 0]}>
            <Character />

            <group
                ref={cameraPivotRef}
                position={[0, 1.8, 0]}
            >
                <group
                    ref={cameraBoomRef}
                    position={[0, 0, 8]}
                />
            </group>

            <PlayerController
                playerRef={playerRef}
                characterState={characterState}
                groundRef={groundRef}
                interactionWorld={interactionWorld}
                interactionManager={interactionManager}
            />

            <CameraController
                characterState={characterState}
            />
        </group>
    );
}