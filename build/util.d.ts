import { Lang } from "./types";
export declare class CustomError extends Error {
    devMessage: string;
    clientMessage: string;
    constructor(lang: Lang, devMessage?: string, clientMessage?: string);
}
export declare class FirebaseError extends Error {
    code: string;
    constructor(code: string, message: string);
}
/** The only form that I found to check if the error has the properties of a FirebaseError (name, message and
 * code) without installing all firebase package. */
export declare function isFirebaseError(err: any): err is FirebaseError;
/** Throws a custom error handlable by the translator */
export declare function fail(lang: Lang, devMessage?: string, clientMessage?: string): never;
