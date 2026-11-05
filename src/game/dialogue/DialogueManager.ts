import type { Dialogue } from "./Dialogue";
import type { DialogueNode } from "./DialogueNode";

export class DialogueManager {

    private currentDialogue: Dialogue | null = null;

    private currentNodeId: string | null = null;

    public start(dialogue: Dialogue): void {

        this.currentDialogue = dialogue;

        this.currentNodeId =
            dialogue.startNodeId;
    }
    public next(): void {

    const currentNode = this.getCurrentNode();

    if (!currentNode) {
        return;
    }

    if (!currentNode.nextNodeId) {
        this.end();
        return;
    }

    this.currentNodeId = currentNode.nextNodeId;
}

    public end(): void {

        this.currentDialogue = null;

        this.currentNodeId = null;
    }

    public getCurrentNode(): DialogueNode | null {

        if (
            !this.currentDialogue ||
            !this.currentNodeId
        ) {
            return null;
        }

        return this.currentDialogue.nodes[
            this.currentNodeId
        ];
    }

    public isActive(): boolean {

        return this.currentDialogue !== null;
    }

}