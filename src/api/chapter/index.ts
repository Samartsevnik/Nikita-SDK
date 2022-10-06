import { Base } from '../../base';
import {DEFAULT_LIMIT, URLS} from '../constants';
import {IChapter, RequestOptions} from '../types';


export class Chapter extends Base {

  async getChapters(params: RequestOptions) {
    if (!params.limit) params.limit = DEFAULT_LIMIT;
    return this.axiosV1.get<Array<IChapter>>(URLS.CHAPTER, {params: params});
  }

  async getChapter(id: string) {
    return this.axiosV1.get<IChapter>(`${URLS.CHAPTER}/${id}`);
  }
}