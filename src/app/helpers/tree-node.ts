export interface TreeNode {
    name: string;
    value?: any;
    children?: TreeNode[];
}

export interface aspFlatNode {
    expandable: boolean;
    name: string;
    value: any;
    level: number;
}