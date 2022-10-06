import { Base } from './base';
import { Book } from './api/book';
import { Chapter } from './api/chapter';
import { Character } from './api/character';
import { Movie } from './api/movie';
import { Quote } from './api/quote';
export declare class LotrSDK extends Base {
}
export interface LotrSDK extends Book, Chapter, Character, Movie, Quote {
}
export declare function LotrClient(token?: string): LotrSDK;
export * from './types';
