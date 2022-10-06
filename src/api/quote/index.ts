import { Base } from '../../base';
import {DEFAULT_LIMIT, URLS} from '../constants';
import {IQuote, RequestOptions} from '../types';


export class Quote extends Base {

  async getQuotes(params: RequestOptions) {
    if (!params.limit) params.limit = DEFAULT_LIMIT;
    return this.axiosV1.get<Array<IQuote>>(URLS.QUOTE, {params: params});
  }

  async getQuote(id: string) {
    return this.axiosV1.get<IQuote>(`${URLS.QUOTE}/${id}`);
  }
}