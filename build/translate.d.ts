import { TranslateObject, TranslateDictionary } from "./types";
/**
 * Recieves a FirebaseError and returns a TranslateObject, an object with util translations.
*/
export default function translate(error: unknown, ...dictionaries: TranslateDictionary[]): TranslateObject;
