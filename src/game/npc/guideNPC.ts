import * as THREE from "three";

import { Interactable } from "../interaction/Interactable";
import { InteractionType } from "../interaction/InteractionTypes";

export class GuideNPC implements Interactable {

    constructor(
        public readonly id: string,
        private readonly position: THREE.Vector3
    ) {}

    public readonly type = InteractionType.NPC;

    public getPosition(): THREE.Vector3 {
        return this.position;
    }

    public getPrompt(): string {
        return "Talk";
    }

    public canInteract(): boolean {
        return true;
    }

    public interact(): void {
        console.log("Hello Player!");
    }
}