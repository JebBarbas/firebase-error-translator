"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = require(".");
var assert_1 = __importDefault(require("assert"));
var testLangs = [
    "ar", "bn", "de", "en",
    "es", "fa", "fr", "he",
    "id", "it", "ja", "ko",
    "ne", "pl", "pt", "ru",
    "th", "tr", "vi", "zh",
];
var code = "auth/invalid-password";
try {
    testLangs.forEach(function (lang) {
        _1.setLanguage(lang);
        console.log(_1.getTranslation(code));
    });
    assert_1["default"].ok(true);
}
catch (_a) {
    assert_1["default"].ok(false);
}
//# sourceMappingURL=test.js.map