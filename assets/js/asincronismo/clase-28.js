const API_URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const rickUrl = `${ API_URL }${ CHARACTER_URL.replace(':id',1) }`
const opts = { crossDomain: true }

const onPeopleResponse = character => {
    console.log(`Hola yo soy ${ character.name }`)
}

$.get(rickUrl,opts,onPeopleResponse)