var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    altura: 1.72
}

var pi = {
    nombre: 'Piscine',
    apellido: 'Terrazas',
    altura: 0.42
}

var angel = {
    nombre: 'Ánghel',
    apellido: 'García',
    altura: 1.68
}

var guadalupe = {
    nombre: 'Guadalupe',
    apellido: 'Ojeda',
    altura: 1.65
}

var maemi = {
    nombre: 'Maemi',
    apellido: 'Montaño',
    altura: 1.22
}

const esAlta = persona => {
    return persona.altura > 1.65
}

var personas = [omar, pi, angel, guadalupe, maemi]

var personasAltas = personas.filter(esAlta)

/*
var personasAltas = personas.filter(function(persona) {
    return persona.altura > 1.65
})
*/

console.log(personasAltas)