"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const axios_1 = __importDefault(require("axios"));
class Base {
    constructor(token) {
        this.axiosV1 = axios_1.default.create({
            baseURL: "https://the-one-api.dev/v2",
        });
        this.axiosV1 = axios_1.default.create({
            baseURL: "https://the-one-api.dev/v2",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
}
exports.Base = Base;
