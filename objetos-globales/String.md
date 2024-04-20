# String

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

Los strings en javascript son inmutables.

### Métodos

- at()
- charAt()
- endsWith()
- includes()
- indexOf()
- replace()
- slice()
- split()
- trim()

### Acceder a un carácter

- at()
- charAt()

### Buscar una subcadena

- endsWith()
- includes()
- indexOf()
- startsWith()

### Obetener una subcadena

- slice()

## at()

Recibe la posición y devuelve un carácter o `undefined` si no existe la posición. Acepta números negativos.

```js
let str = 'Hola'

console.log(str.at(0))       // H
console.log(str.at(-4))      // H
console.log(str.at(-1))      // a
console.log(str.at(5))       // undefined
```

## charAt()

Recibe la posición y devuelve un carácter o una cadena vacía si no existe la posición. No acepta números negativos.

```js
let str = 'Hola'

console.log(str.charAt(0))      // H
console.log(str.charAt(3))      // a
console.log(str.charAt(5))      //
```

## endsWith()

Una cadena termina con cierta subcadena, devolviendo `true` o `false`. Puede recibir un 2° argumento que es hasta que posición tiene que chequear.

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!')); // true
console.log(str1.endsWith('best', 17)); // true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question')); // false
```

## includes()

Busca una cadena en otra cadena devolviendo `true` o `false`. El 2° parámetro es opcional, es la posición desde donde comienza a buscar. Es la opción más recomendable si no necesitamos la posición.

```js
console.log('Widget con id'.includes('Widget'));  // true
console.log('Hola'.includes('Adiós'));            // false

console.log('Midget'.includes('id'));             // true
console.log('Midget'.includes('id', 3));          // false, desde la posición 3 no hay "id"
```

## indexOf()

Busca una subcadena y devuelve su posición. Devulve `-1` si no encontro nada. Si el elemento está más de una vez, devulve el 1°. El 2° parámetro es opcional y nos permite buscar desde la posición indicada.

```js
let str = 'Widget con id';

console.log(str.indexOf('Widget'));   // 0, ya que 'Widget' es encontrado al comienzo
console.log(str.indexOf('widget'));   // -1, no es encontrado, la búsqueda toma en cuenta minúsculas y mayúsculas.
console.log(str.indexOf('id'));       // 1, "id" es encontrado en la posición 1 (..idget con id)
console.log(str.indexOf('id', 2));    // 11

// Si queremos todas las coincidencias podemos correr indexOf() en un bucle
let str2 = 'Astuto como un zorro, fuerte como un buey';
let target = "como";

let pos = -1;
while ((pos = str2.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}
```

## replace()

Devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, que puede ser una cadena o una expresión regular. Si el patrón es una cadena, solo reemplaza la primera coincidencia. El remplazo puede ser un cadena o una función que sera llamada para cada coincidencia.

```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));  // Reemplaza la primera coincidencia
const regex = /Dog/ig;
console.log(p.replace(regex, 'ferret'));  // Reemplaza todas las coincidencia
```

## slice()

Extrae una sección de una cadena y devuelve una nueva cadena. Puede recibir un 2° argumento, que es hasta donde va la cadena, pero sin incluir. Si no tienen este 2° argumento, va hasta el final de la cadena. También son posibles valores negativos para comienzo/final.

```js
let str = "stringify";
console.log(str.slice(0, 5));      // 'strin', el substring desde 0 hasta 5 (sin incluir 5)
console.log(str.slice(0, 1));      // 's', desde 0 hasta 1, pero sin incluir 1, por lo que sólo el carácter en 0

console.log(str.slice(2));         // ringify, desde la 2da posición hasta el final

// comienza en la 4ta posición desde la derecha, finaliza en la 1era posición desde la derecha
console.log(str.slice(-4, -1));    // gif
```

## split()

Divide un String en un Array mediante un separador. Recibe un 2° argumento opcional, que es un entero que especifica un límite sobre el número de divisiones a realizar.

```js
let f = 'No debe nos ir y no.'
let palabra = "Hola"
let semana = 'Lun, Mar, Mie, Jue, Vie, Sab, Dom'
console.log(f.split(" "))
console.log(palabra.split(""))
console.log(semana.split(","))
```

## trim()

Devuelve una cadena de texto despojada de los espacios en blanco en ambos extremos.

```js
let str = '  Hola mundo.  '
let str2 = 'Hola mundo.  '

console.log(str.trim())
console.log(str2.trim())
```