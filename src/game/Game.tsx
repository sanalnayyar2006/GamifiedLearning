"use client";

import Scene from "./world/Scene";
import PauseMenu from "../ui/Pause";

import { gameState, GameState } from "./gameState";

export default function Game() {

    return (
        <>
            <Scene />

            {
                gameState.current == GameState.PAUSED &&
                <PauseMenu/>
            }
        </>
    );
}