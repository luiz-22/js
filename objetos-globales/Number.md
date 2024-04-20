# Number

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number

### Métodos

- isNaN() - estático
- toFixed()

## isNaN() - estático

No autoconvierten sus argumentos a `number`, en cambio verifican que pertenezcan al tipo de dato `number`.
`Number.isNaN(value)` devuelve `true` si el argumento pertenece al tipo de dato `number` y si es `NaN`. En cualquier otro caso devuelve `false`.

Solo es true cuando se le pasa un `NaN`.

```js
alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0/0)       // true

// e.g. estos hubiesen sido true con la función global isNaN()
Number.isNaN("NaN");      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

// Todos retornan false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## toFixed()

El método `toFixed(n)` redondea el número a `n` dígitos después del punto decimal y devuelve una cadena que representa el resultado.

```js
let num = 12.34;
alert(num.toFixed(1)); // "12.3"
```

Ten en cuenta que el resultado de `toFixed` es una cadena. Si la parte decimal es más corta que lo requerido, se agregan ceros hasta el final:

```js
let num = 12.34;
alert(num.toFixed(5)); // "12.34000", con ceros agregados para dar exactamente 5 dígitos
```

Podemos convertirlo a "number" usando el operador unario `+` o llamando a `Number();` por ejemplo, escribir `+num.toFixed(5)`.


