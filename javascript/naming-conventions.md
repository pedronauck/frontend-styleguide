## Naming Conventions

- Avoid single letter names. Be descriptive with your naming.

```javascript
// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
```

- And avoid a misterious abbreviations too. Write the literally word.

```javascript
// bad
var mObj = {},
    $btn = document.querySelector('.button');

// good
var myObject = {},
    $button = document.querySelector('.button');
```

- Use camelCase when naming objects, functions, and instances

```javascript
// bad
var OBJEcttsssss = {};
var this_is_my_object = {};
function c() {};
var u = new user({
  name: 'Bob Parr'
});

// good
var thisIsMyObject = {};
function thisIsMyFunction() {};
var user = new User({
  name: 'Bob Parr'
});
```

- Use PascalCase when naming constructors or classes

```javascript
// bad
function user(options) {
  this.name = options.name;
}

var bad = new user({
  name: 'nope'
});

// good
function User(options) {
  this.name = options.name;
}

var good = new User({
  name: 'yup'
});
```

- Use a leading underscore `_` when naming private properties

```javascript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```

- Use `$` when naming a DOM object reference in a variable. In this way will easy to identify DOM references when you looking the code

```javascript
// bad
var button = document.querySelector('.button');

// good
var $button = document.querySelector('.button');
```

- When saving a reference to `this` use `_this`. Avoid self, that or whatever.

```javascript
// bad
function() {
  var self = this;
  return function() {
    console.log(self);
  };
}

// bad
function() {
  var that = this;
  return function() {
    console.log(that);
  };
}

// good
function() {
  var _this = this;
  return function() {
    console.log(_this);
  };
}
```

- Name your functions. This is helpful for stack traces.

```javascript
// bad
var log = function(msg) {
  console.log(msg);
};

// good
var log = function log(msg) {
  console.log(msg);
};
```