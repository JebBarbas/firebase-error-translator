/** Valid languages to translate */
export type Lang = 'es' | 'en'

/** Interface of a default translation value */
export interface DefaultTranslateObject {
    classMessage: string
    defaultReplaceable: string
}

/** Object with translated messages */
export interface TranslateObject {
    /** Translation to the developer, contains information about the error and how to solve it, */
    toDev: string

    /** Translation to the client (to show in toasts, alert boxes, etc.) shows minimal info
     * of the error. */
    toClient: string
}

/** 
 * A dictionary where the keys are the error codes from some Firebase service (auth, firestore, etc.) and 
 * the value is a TranslateObject
*/
export type TranslateDictionary = [Lang, Record<string, TranslateObject>]