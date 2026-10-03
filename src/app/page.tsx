"use client";

import { Canvas } from "@react-three/fiber";
import Game from "../game/Game";
import PauseMenu from "../ui/Pause";
import { useGameStore } from "../store/GameStore";
import { GameState } from "../game/gameState";

export default function HomePage() {

    const gameState = useGameStore(
        (state) => state.gameState
    );

    const setGameState = useGameStore(
        (state) => state.setGameState
    );

    const handleResume = () => {
        document.body.requestPointerLock?.();
        setGameState(GameState.PLAYING);
    };

    return (
        <div className="fixed inset-0">

            <Canvas
                shadows
                camera={{ position: [10, 8, 10], fov: 60 }}
            >
                <Game />
            </Canvas>

            {
                gameState === GameState.PAUSED && (
                    <PauseMenu
                        onResume={handleResume}
                    />
                )
            }

        </div>
    );
}