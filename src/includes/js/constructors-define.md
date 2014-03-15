```javascript
// Ruim
function user(options) {
  var self = this;
  self.name = options.name;
  self._sayHello = function sayHello() {
    console.log('Hello world!');
  };
}

var user = new User({name: 'John Doe'});

// Bom
function User(options) {
  var _this = this;
  _this.name = options.name;
  _this._sayHello = function sayHello() {
    console.log('Hello world!');
  };
}

var user = new User({name: 'John Doe'});
```
