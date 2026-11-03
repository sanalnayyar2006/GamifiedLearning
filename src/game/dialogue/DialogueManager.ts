import type { Dialogue } from "./Dialogue";
import type { DialogueNode } from "./DialogueNode";

export class DialogueManager {

    private currentDialogue: Dialogue | null = null;

    private currentNode: DialogueNode | null = null;

    public start(dialogue: Dialogue): void {

        this.currentDialogue = dialogue;

        this.currentNode =
            dialogue.nodes[dialogue.startNodeId];
    }

    public end(): void {

        this.currentDialogue = null;

        this.currentNode = null;
    }

    public getCurrentNode(): DialogueNode | null {

        return this.currentNode;
    }

    public isActive(): boolean {

        return this.currentDialogue !== null;
    }

}