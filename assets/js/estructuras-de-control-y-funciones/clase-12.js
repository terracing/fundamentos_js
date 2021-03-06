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

const MAYORIA_DE_EDAD = 18
/*
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/
/*
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')

imprimirSiEsMayorDeEdad(omar)
permitirAcceso(omar)