```javascript
// Ruim
if (test)
  return false;

// Bom
if (test) return false;

// Bom
if (test) {
  return false;
}

// Ruim
function() { return false; }

// Bom
function() {
  return false;
}
```
