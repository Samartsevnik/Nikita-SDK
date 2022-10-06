import { Base } from '../../base';
import {DEFAULT_LIMIT, URLS} from '../constants';
import {IBook, IChapter, RequestOptions} from '../types';

export class Book extends Base {

  async getBooks(params = {} as RequestOptions) {
    if (!params.limit) params.limit = DEFAULT_LIMIT;
    return this.axiosV1.get<Array<IBook>>(URLS.BOOK, {params: params});
  }

  async getBook(id: string){
    return this.axiosV1.get<IBook>(`${URLS.BOOK}/${id}`);
  }

  async getBookChapters(id: string) {
    return this.axiosV1.get<Array<IChapter>>(`${URLS.BOOK}/${id}/chapter`);
  }
}