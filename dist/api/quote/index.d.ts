import { Base } from '../../base';
import { IQuote } from '../types';
export declare class Quote extends Base {
    getQuotes(): Promise<import("axios").AxiosResponse<IQuote[], any>>;
    getQuote(id: string): Promise<import("axios").AxiosResponse<IQuote, any>>;
}
