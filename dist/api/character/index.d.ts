import { Base } from '../../base';
import { ICharacter, IQuote } from '../types';
export declare class Character extends Base {
    getCharacters(): Promise<import("axios").AxiosResponse<ICharacter[], any>>;
    getCharacter(id: string): Promise<import("axios").AxiosResponse<ICharacter, any>>;
    getCharacterQuotes(id: string): Promise<import("axios").AxiosResponse<IQuote[], any>>;
}
