## Loops

- Avoid inline loops. Every loop (with single or multiple statements) should use curly brackets `{}`.

```javascript
// bad
for (initialization; condition; expression) statement;

// good
for (initialization; condition; expression) {
    statements
}
```

- For a better performance, declare the variables out of loop

```javascript
var myArray = ['1', '2', '3', '4', '5'],
    len = myArray.length,
    i;

for (i = 0; i < len; i =+ 1) {
  // iteration block
}
```