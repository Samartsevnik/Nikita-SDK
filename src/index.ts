import { Base } from './base';
import { Book } from './api/book';
import { Chapter } from './api/chapter';
import { Character } from './api/character';
import { Movie } from './api/movie';
import { Quote } from './api/quote';
import {applyMixins} from './utils';

export class LotrSDK extends Base{}

export interface LotrSDK extends Book, Chapter, Character, Movie, Quote{}

applyMixins(LotrSDK, [Book, Chapter, Character, Movie, Quote ])

export function LotrClient (token?: string) {
  return new LotrSDK(token)
}

export * from './types'
