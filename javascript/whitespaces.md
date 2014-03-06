## Whitespace

- Place 1 space before the leading brace.

```javascript
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});
```

- Set off operators with spaces.

```javascript
// bad
var x=y+5;

// good
var x = y + 5;
```

- Both function expressions and function declarations doesn't have a space between the function keyword and the function name.

```javascript
// bad
var foo = function foo() {
    statements
};

// good
var foo = function foo() {
    statements
};

// bad
function bar () {
    statements
}

// good
function bar() {
    statements
}
```

- Add spaces outside parentheses () but avoid it inside.

```javascript
// bad
if( x > 10 ){
    statements
}

// good
if (x > 10) {
    statements
}
```

- Place an empty newline at the end of the file.

```javascript
// bad
(function(window) {
  // ...stuff...
})(window);
```

```javascript
// good
(function(window) {
  // ...stuff...
})(window);

```

- Use indentation when making long method chains.

```javascript
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// good
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// bad
var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width',  (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);

// good
var leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .class('led', true)
    .attr('width',  (radius + margin) * 2)
  .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led);
```