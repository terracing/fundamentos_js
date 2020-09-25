var nombre = 'Omar'

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
    console.log(`Nombre global: ${window.nombre}`)
}

imprimirNombreEnMayusculas(nombre)