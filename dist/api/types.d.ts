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
export interface requestOptions {
    limit?: string;
    page?: number;
    offset?: number;
}
