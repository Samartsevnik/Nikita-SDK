import { Base } from '../../base';
import { IBook, IChapter } from '../types';
export declare class Book extends Base {
    getBooks(): Promise<import("axios").AxiosResponse<IBook[], any>>;
    getBook(id: string): Promise<import("axios").AxiosResponse<IBook, any>>;
    getBookChapters(id: string): Promise<import("axios").AxiosResponse<IChapter[], any>>;
}
