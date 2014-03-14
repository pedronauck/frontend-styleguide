```javascript
var len = items.length,
    itemsCopy = [],
    i;

// Ruim
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// Bom
itemsCopy = items.slice();
```
