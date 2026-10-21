import * as THREE from "three";
import {InteractionType} from "./InteractionTypes"; 

export interface Interactable {
    readonly id: string;
    readonly type: InteractionType;
    getPosition(): THREE.Vector3;
    canInteract(): boolean;
    getPrompt():string;
    interact():void;
};

