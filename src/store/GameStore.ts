//this will save what state should be able to do 
import {create} from "zustand";
import {GameState} from "../game/gameState"
interface GameStore{
   gameState:GameState

    setGameState:(
        state:GameState
    )=>void;
}

export const useGameStore = create<GameStore>((set)=>({
    gameState: GameState.PLAYING,

    setGameState:(state)=>set({
        gameState:state
    })
}))