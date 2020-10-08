const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const opts = {
    crossDomain: true
}

const obtenerPersonaje = id => {
    return new Promise((resolve, reject) => {
        let characterUrl = `${ API_URL }${ CHARACTER_URL.replace(':id',id) }`
        $.get(characterUrl, opts, data => {
            resolve(data)
        }).fail(() => reject(id))
    })
}

const onError = id => {
    console.log(`Ocurrió un error al recuperar el personaje cin ID ${ id }`)
}

obtenerPersonaje(1)
    .then(character => {
        console.log(`Hola yo soy ${ character.name }`)
        return obtenerPersonaje(2)
    })
    .then(character => {
        console.log(`Hola yo soy ${ character.name }`)
        return obtenerPersonaje(3)
    })
    .then(character => {
        console.log(`Hola yo soy ${ character.name }`)
        return obtenerPersonaje(4)
    })
    .then(character => {
        console.log(`Hola yo soy ${ character.name }`)
        return obtenerPersonaje(9)
    })
    .then(character => {
        console.log(`Hola yo soy ${ character.name }`)
    })
    .catch(onError)