import { Base } from '../../base';
import {DEFAULT_LIMIT, URLS} from '../constants';
import {ICharacter, IQuote, RequestOptions} from '../types';


export class Character extends Base {

  async getCharacters(params = {} as RequestOptions) {
    if (!params.limit) params.limit = DEFAULT_LIMIT;
    return this.axiosV1.get<Array<ICharacter>>(URLS.CHARACTER, {params: params});
  }

  async getCharacter(id: string) {
    return this.axiosV1.get<ICharacter>(`${URLS.CHARACTER}/${id}`);
  }

  async getCharacterQuotes(id: string) {
    return this.axiosV1.get<Array<IQuote>>(`${URLS.CHARACTER}/${id}/quote`);
  }
}