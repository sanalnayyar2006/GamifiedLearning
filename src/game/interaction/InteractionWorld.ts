import * as THREE from "three";

import { GuideNPC } from "../npc/guideNPC";
import { Interactable } from "./Interactable";

export class InteractionWorld {

    private readonly interactables: Interactable[] = [];

    constructor() {

        this.interactables.push(

            new GuideNPC(
                "guide-npc",
                new THREE.Vector3(0, 0.505, 5)
            )

        );

    }

    public getInteractables(): Interactable[] {
        return this.interactables;
    }

}