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

const ids = [1, 2, 3, 4, 9]

const promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(characters => {
        characters.map(character => console.log(`Hola yo soy ${ character.name }`))
    })
    .catch(onError)