import type { DialogueNode } from "./DialogueNode";

export type Dialogue = {
    id: string;

    startNodeId: string;

    nodes: Record<string, DialogueNode>;
};