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

const obtenerPersonajes = async() => {
    const ids = [1, 2, 9, 3, 4]
    const promesas = ids.map(id => obtenerPersonaje(id))
    try {
        let characters = await Promise.all(promesas)
        characters.map(character => console.log(`Hola yo soy ${ character.name }`))
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()