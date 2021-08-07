import { setLanguage, getTranslation, language } from ".";
import assert from "assert";

const testLangs:language[] = [
    "ar" , "bn" , "de" ,"en" , 
    "es" , "fa" , "fr" , "he" ,
    "id" , "it" , "ja" , "ko" ,
    "ne" , "pl" , "pt" , "ru" ,
    "th" , "tr" , "vi" , "zh",
]

const code = "auth/invalid-password"

try{
    testLangs.forEach(lang => {
        setLanguage(lang)
        console.log(getTranslation(code))
    })   
    
    assert.ok(true)
}
catch{
    assert.ok(false)
}