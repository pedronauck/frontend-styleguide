```javascript
function Jedi(name) {
  this.name = name;

  // namespace interno para definir os métodos
  var module = module || {};

  // método interno privado
  module._fighting = function _fighting() {
    console.log('fighting');
  };

  return {
    // retornando um método que faz uma chamada ao método privado _fighting()
    init: function init() {
      module._fighting();
    }
  };
}
```
