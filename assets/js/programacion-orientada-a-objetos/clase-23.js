function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

const ALTURA = 1.8

Persona.prototype.soyAlto = function () {
    return this.altura > ALTURA
}

var omar = new Persona('Omar', 'Terrazas', 1.72)
var anghel = new Persona('Ánghel', 'García', 1.83)
var guadalupe = new Persona('Guadalupe', 'Ojeda', 1.65)

console.log(this)

if(this === window) {
    console.log('this es igual a window')
}

/*
 * El objeto this hace referencia al objeto window y no al objeto que hemos creado, por lo que hasta este momento hay que declarar las funciones de manera convencional.
 */