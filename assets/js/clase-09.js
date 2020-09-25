var x = 4, y = "4"

if(x == y) {
    console.log('Los dos valores son iguales')
}

if(x === y) {
    console.log('Los dos valores son iguales')
} else {
    console.log('Los dos valores son iguales pero no son del mismo tipo')
}

var omar = {
    nombre: 'Omar'
}

var otroOmar = {
    nombre: 'Omar'
}

if(omar == otroOmar) {
    // Nunca va a ocurrir
} else if(omar === otroOmar) {
    // Con mayor razón no pasará
} else {
    var otraPersona = omar
    
    if(omar == otraPersona) {
        console.log('Ahora sí son iguales porque apunta al mismo objeto en memoria RAM')
    }

    var otraPersonaMas = {
        ...omar
    }

    if(omar == otraPersonaMas) {
        // Tampoco son iguales, siguen siendo dos objetos diferentes en memoria
    } else {
        console.log('Tampoco son iguales, siguen siendo dos objetos diferentes en memoria')
    }
}
