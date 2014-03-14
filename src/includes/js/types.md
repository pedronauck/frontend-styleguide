```javascript
// Quando você acessa um tipo primitivo você trabalha diretamente com seus valores
var foo = 1,
    bar = foo;

bar = 9;
console.log(foo, bar); // => 1, 9

// Já nos tipos complexos, você trabalha com valores como referência
var foo = [1, 2],
    bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
