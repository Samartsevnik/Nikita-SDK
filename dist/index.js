"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotrClient = exports.LotrSDK = void 0;
const base_1 = require("./base");
const book_1 = require("./api/book");
const chapter_1 = require("./api/chapter");
const character_1 = require("./api/character");
const movie_1 = require("./api/movie");
const quote_1 = require("./api/quote");
const utils_1 = require("./utils");
class LotrSDK extends base_1.Base {
}
exports.LotrSDK = LotrSDK;
(0, utils_1.applyMixins)(LotrSDK, [book_1.Book, chapter_1.Chapter, character_1.Character, movie_1.Movie, quote_1.Quote]);
function LotrClient(token) {
    return new LotrSDK(token);
}
exports.LotrClient = LotrClient;
__exportStar(require("./types"), exports);
