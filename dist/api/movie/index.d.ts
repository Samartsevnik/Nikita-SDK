import { Base } from '../../base';
import { IMovie, IQuote } from '../types';
export declare class Movie extends Base {
    getMovies(): Promise<import("axios").AxiosResponse<IMovie[], any>>;
    getMovie(id: string): Promise<import("axios").AxiosResponse<IMovie, any>>;
    getMovieQuotes(id: string): Promise<import("axios").AxiosResponse<IQuote[], any>>;
}
