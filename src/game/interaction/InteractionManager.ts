//Responsibilty = The manager coordinates interaction

import * as THREE from "three"
import {Interactable} from "./Interactable"
import {InteractionDetector} from "./InteractionDetector"

export class InteractionManager{
    private readonly detector = new InteractionDetector()
    private currentTarget: Interactable | null = null

    //update every frame
    public update(
        playerPosition: THREE.Vector3,
        interactables: Interactable[]
    ): void{
        this.currentTarget = this.detector.findNearest(
            playerPosition,
            interactables
        )
    }

    //current interactable
    public getCurrentTarget(): Interactable | null {
        return this.currentTarget;
    }

    //called when player presses E
    public interact():void{
        if(!this.currentTarget){
            return
        }
        return this.currentTarget.interact()
    }

}