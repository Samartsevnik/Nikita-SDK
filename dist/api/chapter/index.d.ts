import { Base } from '../../base';
import { IChapter } from '../types';
export declare class Chapter extends Base {
    getChapters(): Promise<import("axios").AxiosResponse<IChapter[], any>>;
    getChapter(id: string): Promise<import("axios").AxiosResponse<IChapter, any>>;
}
