"use strict";
exports.__esModule = true;
exports.getTranslation = exports.setLanguage = void 0;
// Global variable to handle traductions
/**
 * The language where is going to be translated the text error
 */
var LANGUAGE = "en";
// Functions
/**
 * Sets the language where is going to be translated the text error
 * @param language The language
 */
var setLanguage = function (language) {
    LANGUAGE = language;
};
exports.setLanguage = setLanguage;
/**
 * Gets the text error of the code, translated in the language (default 'en', but you can use setLanguage())
 * @param code The error code
 * @returns The translated text error
 */
var getTranslation = function (code) {
    var translations = require("./languages/" + LANGUAGE);
    var translation = translations['default'][code];
    if (!translation) {
        translation = translation['default']['else'];
    }
    return translation;
};
exports.getTranslation = getTranslation;
//# sourceMappingURL=index.js.map