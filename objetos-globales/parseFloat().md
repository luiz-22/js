# parseFloat() - parseInt()

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

La conversión numérica usando un `+` o `Number()` es estricta. Si un valor no es exactamente un número, falla:

```js
alert(+"100px"); // NaN
```

Siendo la única excepción, los espacios al principio y al final del string, pues son ignorados.

Estas "leen" el número desde un string hasta que dejan de poder hacerlo. Cuando se topa con un error devuelve el número que haya registrado hasta ese momento. La función `parseInt` devuelve un entero, mientras que `parseFloat` devolverá un punto flotante:

```js
alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5

alert(parseInt('12.3')); // 12, devuelve solo la parte entera
alert(parseFloat('12.3.4')); // 12.3, el segundo punto detiene la lectura
```

Hay situaciones en que `parseInt/parseFloat` devolverán `NaN`. Ocurre cuando no puedo encontrar dígitos:

```js
alert( parseInt('a123')); // NaN, el primer símbolo detiene la lectura
```

La función `parseInt()` tiene un segundo parámetro opcional. Este especifica la base de sistema numérico, entonces `parseInt` puede también analizar cadenas de números hexa, binarios y otros:

```js
alert(parseInt('0xff', 16)); // 255
alert(parseInt('ff', 16)); // 255, sin 0x también funciona

alert(parseInt('2n9c', 36)); // 123456
```
