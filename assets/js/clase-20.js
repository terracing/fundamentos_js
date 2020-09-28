var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    altura: 1.72,
    cantidadDeLibros: 72
}

var pi = {
    nombre: 'Piscine',
    apellido: 'Terrazas',
    altura: 0.42,
    cantidadDeLibros: 2
}

var angel = {
    nombre: 'Ánghel',
    apellido: 'García',
    altura: 1.68,
    cantidadDeLibros: 67
}

var guadalupe = {
    nombre: 'Guadalupe',
    apellido: 'Ojeda',
    altura: 1.65,
    cantidadDeLibros: 112
}

var maemi = {
    nombre: 'Maemi',
    apellido: 'Montaño',
    altura: 1.22,
    cantidadDeLibros: 10
}

var personas = [omar, pi, angel, guadalupe, maemi]

/*
var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`Entre todos tienen ${acum} libros`)
*/

/*
const reducer = (acum, persona) => {
    return acum += persona.cantidadDeLibros
}
*/

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)