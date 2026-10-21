import * as THREE from "three"
import {Interactable} from "./Interactable"
const DEFAULT_INTERACTION_DISTANCE = 2;

//only for detecting the neartes object
export class InteractionDetector{
    constructor (
        private readonly interactionDistance = DEFAULT_INTERACTION_DISTANCE
    ){}

    // fnid nearest interactable within interaction range

    public findNearest(
        playerPosition: THREE.Vector3,
        interactables: Interactable[]

    ): Interactable | null {
        let nearest: Interactable | null = null;
        let nearestDistance = Infinity

        for (const interactable of interactables){
            //ignoring disabled objects

            if(!interactable.canInteract()){
                continue
            };

            const distance = playerPosition.distanceTo(
                interactable.getPosition() 
            )

            if (
                distance <= this.interactionDistance &&
                distance < nearestDistance
            ) {
                nearest = interactable
                nearestDistance = distance                
            }


        }
        return nearest
    }
}
    