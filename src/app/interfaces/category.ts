export interface ICategory {
    brandid: number;
    name: string;
    category: string;
    seq: number;
}

export interface ICategoriesGroups {
    [id: string]: ICategory[];
}
