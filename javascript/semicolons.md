## Semicolons

- **Yup.**

```javascript
// bad
(function() {
 var name = 'Skywalker'
 return name
})()

// good
(function() {
 var name = 'Skywalker';
 return name;
})();

// good
;(function() {
 var name = 'Skywalker';
 return name;
})();
```