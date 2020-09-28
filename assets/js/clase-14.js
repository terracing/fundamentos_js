var omar = {
    nombre: 'Omar',
    apellido: 'Terrazas',
    edad: 35,
    peso: 74
}

console.log(`Al inicio del año ${omar.nombre} pesa ${omar.peso} kilogramos`)

const MOVIMIENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = omar.peso - 3
var dias = 0
/*
function aumentarDePeso(persona) {
    return persona.peso += 0.2
}
*/
const aumentarDePeso = persona => persona.peso += MOVIMIENTO_PESO
const adelgazar = persona => persona.peso -= MOVIMIENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while(omar.peso > META) {
    if(comeMucho()) {
        aumentarDePeso(omar)
    }

    if(realizaDeporte()) {
        adelgazar(omar)
    }

    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${omar.nombre} adelgazó 3 kilogramos`)
