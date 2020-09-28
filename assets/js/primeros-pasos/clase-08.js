var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    edad: 35
}

var pi = {
    nombre: 'Piscine',
    apellido: 'Terrazas',
    edad: 7
}

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}