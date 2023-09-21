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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Initializing middlewares that are listed in `/middlewares/index.ts`.
// It is always expected to register middlewares only through the middleware script.
(0, middlewares_1.initializeMiddlewares)(app);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => res.status(200).json(json));
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
