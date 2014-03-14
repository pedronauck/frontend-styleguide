```javascript
// Ruim
(function() {
 var name = 'Skywalker'
 return name
})()

// Bom
(function() {
 var name = 'Skywalker';
 return name;
})();

// Bom
;(function() {
 var name = 'Skywalker';
 return name;
})();
```
