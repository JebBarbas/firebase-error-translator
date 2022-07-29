const { translate, AuthEN, StorageES, fail } = require('../build')

function main(){
    try{
        const error = {
            name: 'FirebaseError',
            code: 'auth/claims-too-large',
            message: 'Your claims are too large'
        }

        throw error
        fail('es', 'La cague', 'El servidor la ha cagado')
    }
    catch(err){
        const translation = translate(err, AuthEN, StorageES)
        console.log('Error:', translation.toDev)
        console.log('Client:', translation.toClient)
    }
}
main()