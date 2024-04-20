// B: browser - N: node 

// console.log('this', this) // B: es window o document  // N: es el objeto module.exports (el archivo actual)

// console.log('global', global) // N: objeto global

// console.log('globalThis', globalThis) // objeto global

// El valor de this es evaluado durante el tiempo de ejecución, dependiendo del contexto.

this.name = 'Obj-1'

function quieEs() {
    console.log('quienEs():', this.name)
}

let user = {
    name: 'User-1',

    quieEs,                                  // Agrego una función ya creada

    cambioNombre() {   // cambioNombre: function() {} // Las notaciones no son completamente idénticas hay
                                                      //diferencias sutiles relacionadas a la herencia de objetos
        this.name = "User-2"
        let cambia = function (str) {        // Invoco como una función suelta, no es un método de un objeto
            this.name = str                  // Cambia el name del Objeto Global
        }
        cambia('Obj-2')
    },

    quienSera: () => console.log('quienSera():', this.name), // No maneja su scope, es el contexto donde fue creado el objeto

    cheat: function () {
        let that = this                      // Guardo la referencia del objeto user
        let cambia = function (str) {
            that.name = str
        }
        cambia('User-3')
    }
}

quieEs() // N: undefined, porque name no esta definido en el objeto global. global.name, ahí tendría acceso a la propiedad
user.quieEs()
user.quienSera()
user.cambioNombre()
quieEs() // Obj-2, acá ya definí name en el objeto global
user.quienSera()
user.cheat()
user.quieEs()

user.saludo = function () { console.log('saludo():', 'Hola') } // También podria usar una función ya creada
user.saludo()


// ----------------------------------------------- Ejemplo -----------------------------------------------
console.log('----- Ejemplo -----')

function makeUser() {
    return {
        name2: "John",
        ref: this
    };
}

let user2 = makeUser();

console.log(user2.ref.name2); // Error: No se puede leer la propiedad 'name' de undefined

// Esto es porque las reglas que establecen el this no buscan en la definición del objeto. Solamente importa el momento
//en que se llama.
// Aquí el valor de this dentro de makeUser() es undefined, porque es llamado como una función, no como un método con
//sintaxis de punto.
// El valor de this es uno para la función entera; bloques de código y objetos literales no lo afectan.
// Entonces ref: this en realidad toma el this actual de la función.