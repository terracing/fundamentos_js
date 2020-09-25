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

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona // var nombre = persona.nombre
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEnMayusculas(omar)
imprimirNombreYEdad(pi)
imprimirNombreYEdad({nombre: 'Maemi', edad: 8})