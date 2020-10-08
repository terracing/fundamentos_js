const ALTURA = 1.8

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        /* var nombre = this.nombre, apellido = this.apellido */
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn) {
            fn(nombre, this.apellido)            
        }
    }

    soyAlto() {
        return this.altura > ALTURA
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if(fn) {
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen día ${ nombre } ${ apellido }`)
    if(esDev) {
        console.log(`Ah, mira, no sabía que eras desarrollador`)
    }
}

var omar = new Desarrollador('Omar', 'Terrazas')
var anghel = new Persona('Ánghel', 'García', 1.83)
var guadalupe = new Persona('Guadalupe', 'Ojeda', 1.65)

omar.saludar(responderSaludo)