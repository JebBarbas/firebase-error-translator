"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.isFirebaseError = exports.FirebaseError = exports.CustomError = void 0;
const getDefault_1 = __importDefault(require("./translations/getDefault"));
class CustomError extends Error {
    constructor(lang, devMessage, clientMessage = 'default') {
        const defaultDevMessage = getDefault_1.default(lang).classMessage;
        super(defaultDevMessage);
        this.devMessage = devMessage !== null && devMessage !== void 0 ? devMessage : defaultDevMessage;
        this.clientMessage = clientMessage;
    }
}
exports.CustomError = CustomError;
class FirebaseError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'FirebaseError';
        this.code = code;
    }
}
exports.FirebaseError = FirebaseError;
/** The only form that I found to check if the error has the properties of a FirebaseError (name, message and
 * code) without installing all firebase package. */
function isFirebaseError(err) {
    if (typeof err === 'undefined')
        return false;
    if (typeof err.name === 'undefined')
        return false;
    if (typeof err.message === 'undefined')
        return false;
    if (typeof err.code === 'undefined')
        return false;
    return true;
}
exports.isFirebaseError = isFirebaseError;
/** Throws a custom error handlable by the translator */
function fail(lang, devMessage, clientMessage = 'default') {
    throw new CustomError(lang, devMessage, clientMessage);
}
exports.fail = fail;
