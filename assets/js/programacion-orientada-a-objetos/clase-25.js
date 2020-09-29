const ALTURA = 1.8

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > ALTURA
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

var omar = new Desarrollador('Omar', 'Terrazas')
var anghel = new Persona('Ánghel', 'García', 1.83)
var guadalupe = new Persona('Guadalupe', 'Ojeda', 1.65)