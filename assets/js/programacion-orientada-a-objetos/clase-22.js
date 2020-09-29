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

/* 
 * Los prototipos se deberían declarar juntas, cuando se esta inicializando el objeto, para evitar errores de ejecución y tener un código más claro
 */

var omar = new Persona('Omar', 'Terrazas', 1.72)
var anghel = new Persona('Ánghel', 'García', 1.83)
var guadalupe = new Persona('Guadalupe', 'Ojeda', 1.65)

omar.saludar()
omar.soyAlto()

anghel.saludar()
anghel.soyAlto()

guadalupe.saludar()
guadalupe.soyAlto()