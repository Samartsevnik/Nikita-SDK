import { Base } from '../../base';
import { IMovie, IQuote, RequestOptions } from '../types';
export declare class Movie extends Base {
    getMovies(params?: RequestOptions): Promise<import("axios").AxiosResponse<IMovie[], any>>;
    getMovie(id: string): Promise<import("axios").AxiosResponse<IMovie, any>>;
    getMovieQuotes(id: string): Promise<import("axios").AxiosResponse<IQuote[], any>>;
}
