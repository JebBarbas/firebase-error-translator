/**
 * The values that language can have
 */
export declare type language = "ar" | "bn" | "de" | "en" | "es" | "fa" | "fr" | "he" | "id" | "it" | "ja" | "ko" | "ne" | "pl" | "pt" | "ru" | "th" | "tr" | "vi" | "zh";
/**
 * Sets the language where is going to be translated the text error
 * @param language The language
 */
export declare const setLanguage: (language: language) => void;
/**
 * Gets the text error of the code, translated in the language (default 'en', but you can use setLanguage())
 * @param code The error code
 * @returns The translated text error
 */
export declare const getTranslation: (code: string) => string;
//# sourceMappingURL=index.d.ts.map