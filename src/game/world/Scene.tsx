import * as THREE from "three";
import { useRef } from "react";

import Ground from "./Ground";
import Lighting from "./Lighting";
import WorldSky from "./Sky";

import Player from "../player/PlayerV";
import InputManager from "../player/InputManager";
import MouseInputManager from "../player/mouseInputManager";
import GuideNPCView from "../npc/GuideNPCView";

import {
    InteractionManager,
    InteractionWorld,
} from "../interaction";

export default function Scene() {
    const groundRef = useRef<THREE.Mesh>(null);

    const interactionWorld = useRef(new InteractionWorld());
    const interactionManager = useRef(new InteractionManager());

    return (
        <>
            <WorldSky />
            <Lighting />

            <Ground ref={groundRef} />

            <GuideNPCView />

            <Player
                groundRef={groundRef}
                interactionWorld={interactionWorld}
                interactionManager={interactionManager}
            />

            <InputManager />
            <MouseInputManager />
        </>
    );
}