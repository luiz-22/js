function Usuario(nombre) {
    this.nombre = nombre
    this.regular = true
}

Usuario.prototype.pedido = function () {
    this.regular = false
    console.log(this)
}

Usuario.prototype.arrow = () => {
    console.log(this)
}


class User {
    constructor(nombre) {
        this.nombre = nombre
        this.regular = true

        //this.pedido = this.pedido.bind(this)
    }

    pedido() {
        this.regular = false
        console.log(this)
    }

    arrow = () => {
        console.log(this)
    }
}


let usuario = new Usuario('Pepe')

usuario.pedido()
usuario.arrow()

let user = new User('John')

user.pedido()
user.arrow()


// El contexto de ejecución de las =>, se va a generar y definir en el momento que fue declarada.
//La asociación al this, se va a dar en el momento que fue defina.
// El contexto de ejecución de las funciónes clásicas, la vamos a tener definidas cuando las
//invoquemos. La asociación al this va a ser cuando las invoquemos.