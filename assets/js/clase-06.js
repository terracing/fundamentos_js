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

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(omar)
imprimirNombreEnMayusculas(pi)
imprimirNombreEnMayusculas({nombre: 'Maemi'})