"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_session_1 = __importDefault(require("cookie-session"));
/**
 * Cookie Session Configuration
 *
 * This middleware sets up a cookie-based session with the specified options.
 * It includes a session name, secret keys for encryption, and cookie options
 * such as the maximum age of the cookie.
 */
exports.default = (0, cookie_session_1.default)({
    name: 'session',
    keys: [
        'Bl1)JhG2Al;|9BOQ>hVKF^KBkEHPkqk.C z1~8i-,<{kpXv ^ }Pd+->5=yEyMZb',
        // '`,5*_&Yvu/#gM|&uXIl|=vzJH0~7jF{W+R*ib0e>u`m0@wMv`is~+lEeR:E6DL_/',
        // '/+_ekKS{]w5%*^T{5kKq|/6@o6QXV+e%sx~/`K+lecem)b&CZ<[m+Qkg8&*g{1O0'
    ],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // Maximum age of the session cookie (24 hours)
});
