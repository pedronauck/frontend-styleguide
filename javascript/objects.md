## Objects

### Creating object

- Use the literal syntax for object creation.

```javascript
// bad
var myObject = new Object();

// good
var myObject = {};
```

- Don't use [reserved words](http://es5.github.io/#x7.6.1.1) as keys. It won't work in IE8.

```javascript
// bad
var superman = {
  default: { clark: 'kent' },
  private: true
};

// good
var superman = {
  defaults: { clark: 'kent' },
  hidden: true
};
```

- Use readable synonyms in place of reserved words.

```javascript
// bad
var superman = {
  class: 'alien'
};

// bad
var superman = {
  klass: 'alien'
};

// good
var superman = {
  type: 'alien'
};
```

### Access properties

- For accessing the property of a object has many ways. But the better way that I prefer is:

```javascript
// bad
myObject['property'];

// good
myObject.property;
```