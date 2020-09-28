var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    edad: 35,
    peso: 74
}

console.log(`Al inicio del año ${omar.nombre} pesa ${omar.peso} kilogramos`)

const MOVIMIENTO_PESO = 0.2
/*
function aumentarDePeso(persona) {
    return persona.peso += 0.2
}
*/
const aumentarDePeso = persona => persona.peso += MOVIMIENTO_PESO

const adelgazar = persona => persona.peso -= MOVIMIENTO_PESO

for ( var i = 1; i <= 365; i++ ) {
    var random = Math.random()

    if(random < 0.25) {
        aumentarDePeso(omar)
    } else  if(random < 0.5) {
        adelgazar(omar)
    }
}


console.log(`Al final del año ${omar.nombre} pesa ${omar.peso.toFixed(1)} kilogramos`)
