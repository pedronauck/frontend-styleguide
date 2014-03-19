```javascript
var myArray = [5, 'John', true];

// Ruim
if (myArray.length) {
  // some stuff
}

// Ruim
if (myArray instanceof Array) {
  // some stuff
}

// Ruim
if (myArray.constructor === Array) {
  // some stuff
}

// Bom
if (Array.isArray(myArray)) {
  // some stuff
}
```
