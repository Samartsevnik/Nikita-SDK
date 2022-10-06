"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const base_1 = require("../../base");
const constants_1 = require("../constants");
class Character extends base_1.Base {
    getCharacters() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axiosV1.get(constants_1.URLS.CHARACTER);
        });
    }
    getCharacter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axiosV1.get(`${constants_1.URLS.CHARACTER}/${id}`);
        });
    }
    getCharacterQuotes(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axiosV1.get(`${constants_1.URLS.CHARACTER}/${id}/quote`);
        });
    }
}
exports.Character = Character;
