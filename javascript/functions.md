## Functions

### Types of functions

```
// anonymous function expression
var anonymous = function() {
  return true;
};

// named function expression
var named = function named() {
  return true;
};

// immediately-invoked function expression (IIFE)
(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

### Define functions

- About how to use curly brackets `{}` when you define a function. In the literal mode:

```javascript
// bad
var foo = function foo()
{

};

// good
var foo = function foo() {

};
```

- Or when you are creating a constructor.

```javascript
// bad
function foo()
{

}

// good
function foo() {

}
```