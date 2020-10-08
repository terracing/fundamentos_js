const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const opts = { crossDomain: true }

const onPeopleResponse = character => {
    console.log(`Hola yo soy ${ character.name }`)
}

const obtenerPersonaje = id => {
    let characterUrl = `${ API_URL }${ CHARACTER_URL.replace(':id',id) }`
    $.get(characterUrl,opts,onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)