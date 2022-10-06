import { Base } from '../../base';
import {DEFAULT_LIMIT, URLS} from '../constants';
import {IMovie, IQuote, RequestOptions} from '../types';


export class Movie extends Base {

  async getMovies(params = {} as RequestOptions) {
    if (!params.limit) params.limit = DEFAULT_LIMIT;
    return this.axiosV1.get<Array<IMovie>>(URLS.MOVIE, {params: params});
  }

  async getMovie(id: string) {
    return this.axiosV1.get<IMovie>(`${URLS.MOVIE}/${id}`);
  }

  async getMovieQuotes(id: string) {
    return this.axiosV1.get<Array<IQuote>>(`${URLS.MOVIE}/${id}/quote`);
  }
}