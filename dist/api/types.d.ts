export interface IChapter {
    id: string;
}
export interface IMovie {
    title: string;
}
export interface IQuote {
    author: string;
}
export interface IBook {
    name: string;
}
export interface ICharacter {
    value: string;
}
export interface RequestOptions {
    limit?: number;
    page?: number;
    offset?: number;
}
