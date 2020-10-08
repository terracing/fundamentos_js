const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const opts = {
    crossDomain: true
}

const obtenerPersonaje = (id, callback) => {
    let characterUrl = `${ API_URL }${ CHARACTER_URL.replace(':id',id) }`
    $.get(characterUrl, opts, callback).fail(() => {
        console.log(`No se pudo obtener el personaje ${ id }`)
    })
}

obtenerPersonaje(1, character => {
    console.log(`Hola yo soy ${ character.name }`)
    obtenerPersonaje(2, character => {
        console.log(`Hola yo soy ${ character.name }`)
        obtenerPersonaje(3, character => {
            console.log(`Hola yo soy ${ character.name }`)
            obtenerPersonaje(4, character => {
                console.log(`Hola yo soy ${ character.name }`)
                obtenerPersonaje(9, character => {
                    console.log(`Hola yo soy ${ character.name }`)
                    /* Callback Hell */
                })
            })
        })
    })
})