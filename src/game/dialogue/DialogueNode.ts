export type DialogueNode = {
    id: string;

    speaker: string;

    text: string;

    nextNodeId: string | null;
};
