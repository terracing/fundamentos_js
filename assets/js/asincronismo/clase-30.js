const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const opts = { crossDomain: true }

const obtenerPersonaje = (id,callback) => {
    let characterUrl = `${ API_URL }${ CHARACTER_URL.replace(':id',id) }`
    $.get(characterUrl,opts,character => {
        console.log(`Hola yo soy ${ character.name }`)
        if(callback) {
            callback()
        }
    })
}

obtenerPersonaje(1,() => {
    obtenerPersonaje(7, () => {
        obtenerPersonaje(2)
    })
})

