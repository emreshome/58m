export interface NetworkNode {
    id: number;
    type: NetworkNodeType;
    appearances: number;
    name: string;
    x?: number;
    y?: number;
}

export enum NetworkNodeType {
    Worker = "extra",
    Employer = "establishment"
}