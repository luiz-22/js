# Math

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

Todos las propiedades y métodos son estáticos.

### Métodos

- ceil()
- floor()
- max()
- min()
- random()
- round()
- trunc()

## ceil()

Redondea un n° hacia arriba.

```js
console.log(Math.ceil(3.1)) // 4
```

## floor()

Redondea un n° hacia abajo.

```js
console.log(Math.floor(3.1)) // 3
```

## max()

Devuelven el mayor n° de entre una cantidad arbitraria de argumentos.

```js
console.log(Math.max(3, 5, -10, 0, 1)) // 5
```

## min()

Devuelven el menor n° de entre una cantidad arbitraria de argumentos.

```js
console.log(Math.min(1, 2, -7)) // -7
```

## random()

Devuelve un número aleatorio entre 0 y 1 (no incluyendo 1).

```js
console.log(Math.random())
```

## round()

Redondea un n° al entero más cercano, en caso de 3.5, redonde a 4.

```js
console.log(Math.round(3.1)) // 3
```

## trunc()

Remueve lo que hay tras el punto decimal sin redondear.

```js
console.log(Math.trunc(3.1)) // 3
```