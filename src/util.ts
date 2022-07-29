import getDefault from "./translations/getDefault"
import { Lang } from "./types"

export class CustomError extends Error {
    devMessage:string
    clientMessage:string
    constructor(lang:Lang, devMessage?:string, clientMessage = 'default'){
        const defaultDevMessage = getDefault(lang).classMessage
        
        super(defaultDevMessage)
        this.devMessage = devMessage ?? defaultDevMessage
        this.clientMessage = clientMessage
    }
}

export class FirebaseError extends Error {
    code:string
    constructor(code:string, message:string){
        super(message)
        this.name = 'FirebaseError'
        this.code = code
    }
}

/** The only form that I found to check if the error has the properties of a FirebaseError (name, message and 
 * code) without installing all firebase package. */
export function isFirebaseError(err:any):err is FirebaseError{
    if(typeof err === 'undefined') return false
    if(typeof err.name === 'undefined') return false
    if(typeof err.message === 'undefined') return false
    if(typeof err.code === 'undefined') return false

    return true
}

/** Throws a custom error handlable by the translator */
export function fail(lang:Lang, devMessage?:string, clientMessage = 'default'):never{
    throw new CustomError(lang, devMessage, clientMessage)
}