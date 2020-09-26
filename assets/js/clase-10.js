var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    edad: 35,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero) {
        console.log('ingeniero')
    }
    if(persona.cocinero) {
        console.log('cocinero')
    }
    if(persona.cantante) {
        console.log('cantante')
    }
    if(persona.dj) {
        console.log('dj')
    }
    if(persona.guitarrista) {
        console.log('guitarrista')
    }
    if(persona.drone) {
        console.log('drone')
    }
}

function imprimirSiEsMayorDeEdad(persona) {
    if(persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirProfesiones(omar)
imprimirSiEsMayorDeEdad(omar)