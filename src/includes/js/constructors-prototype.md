```javascript
function Jedi(name) {
  this.name = name;
}

// Ruim
Jedi.prototype = {
  showName: function showName() {
    console.log('My name is: ' + this.name);
  },
  fighting: function fighting() {
    console.log('fighting!');
  }
};

// Bom
Jedi.prototype.showName = function showName() {
  console.log('My name is: ' + this.name);
};

Jedi.prototype.fight = function fight() {
  console.log('fighting');
};
```
