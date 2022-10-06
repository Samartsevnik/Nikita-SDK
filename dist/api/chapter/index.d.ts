import { Base } from '../../base';
import { IChapter, RequestOptions } from '../types';
export declare class Chapter extends Base {
    getChapters(params?: RequestOptions): Promise<import("axios").AxiosResponse<IChapter[], any>>;
    getChapter(id: string): Promise<import("axios").AxiosResponse<IChapter, any>>;
}
