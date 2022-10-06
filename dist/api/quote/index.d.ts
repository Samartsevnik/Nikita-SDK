import { Base } from '../../base';
import { IQuote, RequestOptions } from '../types';
export declare class Quote extends Base {
    getQuotes(params?: RequestOptions): Promise<import("axios").AxiosResponse<IQuote[], any>>;
    getQuote(id: string): Promise<import("axios").AxiosResponse<IQuote, any>>;
}
