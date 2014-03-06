## Constructors

- Assign methods to the prototype object, instead of overwriting the prototype with a new object. Overwriting the prototype makes inheritance impossible: by resetting the prototype you'll overwrite the base!

```javascript
function Jedi(name) {
  this.name = name;
}

// bad
Jedi.prototype = {
  showName: function showName() {
    console.log('My name is: ' + this.name);
  },
  fighting: function fighting() {
    console.log('fighting!');
  }
};

// good
Jedi.prototype.showName = function showName() {
  console.log('My name is: ' + this.name);
};

Jedi.prototype.fight = function fight() {
  console.log('fighting');
};
```

- When you use a Constructor Pattern, use a namespace to create internal methods and chooses using a private methods.

```javascript
function Jedi(name) {
  this.name = name;

  // the internal namespace for define methods
  var module = module || {};

  // private method
  module._fighting = function _fighting() {
    console.log('fighting');
  };

  return {
    // return a single methods init() that call privated method fighting()
    init: function init() {
      module._fighting();
    }
  };
}
```

- Methods can return `this` to help with method chaining.

```javascript
// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20) // => undefined

// good
Jedi.prototype.jump = function() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump()
  .setHeight(20);
```