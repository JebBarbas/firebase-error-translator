// Type definitions
/**
 * The values that language can have
 */
export type language = 
"ar" | "bn" | "de" | "en" | 
"es" | "fa" | "fr" | "he" |
"id" | "it" | "ja" | "ko" |
"ne" | "pl" | "pt" | "ru" |
"th" | "tr" | "vi" | "zh"


// Global variable to handle traductions
/**
 * The language where is going to be translated the text error
 */
let LANGUAGE:language = "en"

// Functions
/**
 * Sets the language where is going to be translated the text error
 * @param language The language
 */
export const setLanguage = (language:language):void => {
    LANGUAGE = language
}

/**
 * Gets the text error of the code, translated in the language (default 'en', but you can use setLanguage())
 * @param code The error code
 * @returns The translated text error
 */
export const getTranslation = (code:string):string => {
    const translations = require(`./languages/${LANGUAGE}`)
    let translation = translations['default'][code]

    if(!translation){
        translation = translation['default']['else']
    }
    
    return translation
}