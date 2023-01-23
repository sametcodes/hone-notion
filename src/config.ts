
//color: "#ff5c57" | "#5af78e" | "#f3f99d";
export type Node = {
    node: string;
    description: string;
}

export type IConfig = {
    nodes: Node[]
}

export type Colors = "red" | "green" | "yellow";
export type BGColors = "red" | "green" | "yellow";
export type TextStylings = "bold" | "italic" | "underline" | "strikethrough";