import getDefault from "./translations/getDefault";
import { TranslateObject, TranslateDictionary } from "./types";
import { CustomError, isFirebaseError } from "./util";

/** 
 * Recieves a FirebaseError and returns a TranslateObject, an object with util translations.
*/
export default function translate(
    error:unknown, 
    ...dictionaries: TranslateDictionary[]
):TranslateObject
{
    if(dictionaries.length <= 0){
        throw new Error(`Can't translate without the dictionaries, please provide them`)
    }

    const DEFAULT_REPLACE = dictionaries[0] ? 
    getDefault(dictionaries[0][0]).defaultReplaceable :
    getDefault('en').defaultReplaceable

    try{
        // If the given error is a FirebaseError, search the translation in dictionaries
        if(isFirebaseError(error)){
            // Searches the translation in every dictionary
            for(const dictionary of dictionaries){
                const [_, translations] = dictionary

                const maybeTranslation = translations[error.code]
                if(maybeTranslation){
                    // If the client translation is default, returns the default text for that lang
                    const clientText = maybeTranslation.toClient === 'default' ? 
                    DEFAULT_REPLACE : 
                    maybeTranslation.toClient

                    return {
                        toClient: clientText,
                        toDev: maybeTranslation.toDev
                    }
                }
            }
        }

        // If the given error is a CustomError, returns it and translates the client message in case
        // this is default
        if(error instanceof CustomError){
            const clientMessage = error.clientMessage === 'default' ? 
            DEFAULT_REPLACE : 
            error.clientMessage
            
            return {
                toDev: error.devMessage,
                toClient: clientMessage
            }
        }

        // If the given error is a Error, returns the message to the developer and a
        // default error message to the client
        if(error instanceof Error){
            
            return {
                toDev: error.message,
                toClient: DEFAULT_REPLACE
            }
        }

        // If the given error isn't a valid Error instance, then only return
        // the error as a string.
        const defaultTranslateError = {
            toDev: `${error}`,
            toClient: DEFAULT_REPLACE
        }

        return defaultTranslateError
    }
    catch{
        // If the translation fails, returns a simple text saying this
        const defaultTranslateError = {
            toDev: `The translation failed.`,
            toClient: DEFAULT_REPLACE
        }

        return defaultTranslateError
    }
}