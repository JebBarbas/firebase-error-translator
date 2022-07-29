# Firebase Error Translator

Helps to handle the firebase errors based on their codes, you can translate the error to any of the available languages, now it also adds a translation to the client.

---

[![Build Status](https://app.travis-ci.com/JebBarbas/firebase-error-translator.svg?branch=main)](https://app.travis-ci.com/JebBarbas/firebase-error-translator)
[![dependencies Status](https://status.david-dm.org/gh/jebbarbas/firebase-error-translator.svg)](https://david-dm.org/jebbarbas/firebase-error-translator)
![npm](https://img.shields.io/npm/v/firebase-error-translator)
![npm](https://img.shields.io/npm/dt/firebase-error-translator)
![GitHub Repo stars](https://img.shields.io/github/stars/jebbarbas/firebase-error-translator?style=social)

## Services

For now, the version only supports translations for:

- Auth: ✅
- Storage: ✅
- Firestore: ❌ (in the future, when I could find a documentation for the firestore errors)

## Basic Use

Note: This syntax is using module imports, but if you want to use commonjs modules,
you can use them.

To use the function, import the `translate` function, and a TranslateDictionary, deppending on the
service of the error and the language you want to translate; in this case the service of the possible
error is Auth (firebase/auth), and the language I want to translate is spanish (es)

```js
import { translate, AuthEs } from 'firebase-error-translator'

...

const registerUser = async (email, password) => {
    try{
        await signInWithEmailAndPassword(email, password)
    }
    catch(err){
        handleError(translate(err, AuthEs))
    }
}

...
```

`translate` will search the FirebaseError code in the given TranslateDictionary, and will return a
`TranslateObject`, which has the properties `toDev` with a explained translation, and `toClient`, for
ocassions where you want to show the error to the user (don't worry, not all errors display a detailed
message).

```js
...
// Lets asume that the error code is 'auth/user-not-found'
const translation = translate(err, AuthEs)

// Show the explained error to the developer
console.error(translation.toDev) // No existe ningún registro de usuario que corresponda al identificador proporcionado.

// Show a little hint of the error to the client
todoShowError(translation.toClient) // Usuario no encontrado, por favor revise su información.
```

In some cases, `translation.toClient` will return a detailled message like 'The provided email is taken by
another user, please write another one.', and in another ocassions, it will only return a message like 
'Server Error.', it deppends of the error.

```js
...
// Lets asume now that the error code is 'auth/claims-too-large'
const translation = translate(err, AuthEn) // Note: Now we are using AuthEn instead of AuthEs, to get english translations

// Show the explained error to the developer
console.error(translation.toDev) // The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.

// Show a little hint of the error to the client
todoShowError(translation.toClient) // Server Error.
```

## Multiple Dictionaries

If you don't know exactly what type of error are you getting (maybe in some function that can fail getting
your auth and a storage), you can provide many TranslationDictionaries as you want.

```js
...
const veryConfusingFunction = async () => {
    try{
        const userPhoto = await getUserPhoto() // Here can fail the auth service
        await uploadPhoto(userPhoto) // Here can fail the storage service
    }
    catch(err){
        // We provide 2 dictionaries because we don't know
        // in which function will fail
        handleError(translate(err, AuthES, StorageES))
    }
}
```

## Custom Errors and Not Error Handling

If you want to force an error, you can make it with `fail()`, you only need to write the language of the
error, the developer message and the client message.

```js
import { fail, translate, AuthEN } from 'firebase-error-translator'

...

const loadForm = () => {
    try{
        if(email === ''){
            fail('en', 'The user didnt write its email, what a dumb.', 'Email is required, please write it:).')
        }
    }
    catch(err){
        const translation = translate(err, AuthEN)

        console.error(translation.toDev) // The user didnt write its email, what a dumb.
        todoShowError(translation.toClient) // Email is required, please write it:).
    }
}
```

You can also use translate with normal errors and values with `toString()` methods.

```js
...

const failWithError = () => {
    try{
        throw new Error('My function failed.')
    }
    catch(err){
        console.log(translate(err, StorageES)) // We must provide at least one dictionary, this is to detect the language, the storage dictionaries are the shortest so we gonna use them

        /*
         * {
              toClient: 'Error de Servidor.',
              toDev: 'My function failed.',
         * }
         */
    } 
}

const failWithToString = () => {
    try{
        throw new Date()
    }
    catch(err){
        console.log(translate(err, StorageES)) // We must provide at least one dictionary, this is to detect the language, the storage dictionaries are the shortest so we gonna use them

        /*
         * {
              toClient: 'Error de Servidor.',
              toDev: '2022-07-29T02:51:51.246Z',
         * }
         */
    } 
}

```

## TranslationDictionaries

The translation dictionaries are objects that start with the Firebase service of the codes that it
contains (Auth or Storage right now), following by the language code based in the 
[ISO 639-1](https://es.wikipedia.org/wiki/ISO_639-1) rules.