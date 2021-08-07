# firebase-error-translator
Helps to handle the firebase errors based on their codes, you can translate the error to any of the available languages.
(Now only works with auth errors)

---

[![Build Status](https://app.travis-ci.com/JebBarbas/firebase-error-translator.svg?branch=main)](https://app.travis-ci.com/JebBarbas/firebase-error-translator)
[![dependencies Status](https://status.david-dm.org/gh/jebbarbas/firebase-error-translator.svg)](https://david-dm.org/jebbarbas/firebase-error-translator)
![npm](https://img.shields.io/npm/v/firebase-error-translator)
![npm](https://img.shields.io/npm/dt/firebase-error-translator)
![GitHub top language](https://img.shields.io/github/languages/top/jebbarbas/firebase-error-translator)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/firebase-error-translator?style=social)

## Use
```js
import { setLanguage, getTranslation } from 'firebase-error-translator'

setLanguage('es')

(async ()=>{
    try{
        await firebaseOperation()
    }
    catch(err){
        handleError(getTranslation(err.code))
    }
})()
```

## Available Languages
Here is a list of the available languages that you can use and the how to config them. Now there are 20 languages
- Arabic 
```js 
setLanguage('ar')
```

- Bengali 
```js 
setLanguage('bn')
```

- German 
```js 
setLanguage('de')
```

- English (default) 
```js 
setLanguage('en')
```

- Spanish 
```js 
setLanguage('es')
```

- Persian 
```js 
setLanguage('fa')
```

- French 
```js 
setLanguage('fr')
```

- Hebrew 
```js 
setLanguage('he')
```

- Indonesian 
```js 
setLanguage('id')
```

- Italian 
```js 
setLanguage('it')
```

- Japanese 
```js 
setLanguage('ja')
```

- Korean 
```js 
setLanguage('ko')
```

- Nepali 
```js 
setLanguage('ne')
```

- Polish 
```js 
setLanguage('pl')
```

- Portuguese 
```js 
setLanguage('pt')
```

- Russian 
```js 
setLanguage('ru')
```

- Thai 
```js 
setLanguage('th')
```

- Turkish 
```js 
setLanguage('tr')
```

- Vietnamese 
```js 
setLanguage('vi')
```

- Chinese 
```js 
setLanguage('zh')
```

## Translations
The translations are from the [Firebase Documentation](https://firebase.google.com/docs/auth/admin/errors). If you want to add an extra language, you can dowload the repo and create a file in src/languages/*language code*.ts (the language code is based in the [ISO 639-1](http://www.mathguide.de/info/tools/languagecode.html) rules). Then follow this structure:
```js
const translations = {
    "auth/code": "Full Message.",
    // ...

    "else": "Server Error." // Translate this message to the language.  
}

export default translations
```