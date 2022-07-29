"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDefault_1 = __importDefault(require("./translations/getDefault"));
const util_1 = require("./util");
/**
 * Recieves a FirebaseError and returns a TranslateObject, an object with util translations.
*/
function translate(error, ...dictionaries) {
    if (dictionaries.length <= 0) {
        throw new Error(`Can't translate without the dictionaries, please provide them`);
    }
    const DEFAULT_REPLACE = dictionaries[0] ?
        getDefault_1.default(dictionaries[0][0]).defaultReplaceable :
        getDefault_1.default('en').defaultReplaceable;
    try {
        // If the given error is a FirebaseError, search the translation in dictionaries
        if (util_1.isFirebaseError(error)) {
            // Searches the translation in every dictionary
            for (const dictionary of dictionaries) {
                const [_, translations] = dictionary;
                const maybeTranslation = translations[error.code];
                if (maybeTranslation) {
                    // If the client translation is default, returns the default text for that lang
                    const clientText = maybeTranslation.toClient === 'default' ?
                        DEFAULT_REPLACE :
                        maybeTranslation.toClient;
                    return {
                        toClient: clientText,
                        toDev: maybeTranslation.toDev
                    };
                }
            }
        }
        // If the given error is a CustomError, returns it and translates the client message in case
        // this is default
        if (error instanceof util_1.CustomError) {
            const clientMessage = error.clientMessage === 'default' ?
                DEFAULT_REPLACE :
                error.clientMessage;
            return {
                toDev: error.devMessage,
                toClient: clientMessage
            };
        }
        // If the given error is a Error, returns the message to the developer and a
        // default error message to the client
        if (error instanceof Error) {
            return {
                toDev: error.message,
                toClient: DEFAULT_REPLACE
            };
        }
        // If the given error isn't a valid Error instance, then only return
        // the error as a string.
        const defaultTranslateError = {
            toDev: `${error}`,
            toClient: DEFAULT_REPLACE
        };
        return defaultTranslateError;
    }
    catch (_a) {
        // If the translation fails, returns a simple text saying this
        const defaultTranslateError = {
            toDev: `The translation failed.`,
            toClient: DEFAULT_REPLACE
        };
        return defaultTranslateError;
    }
}
exports.default = translate;
