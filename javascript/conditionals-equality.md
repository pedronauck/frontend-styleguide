## Conditional Expressions & Equality

- Conditional expressions are evaluated using coercion with the ToBoolean method and always follow these simple rules:

  - **Objects** evaluate to true
  - **Undefined** evaluates to false
  - **Null** evaluates to false
  - **Booleans** evaluate to the value of the boolean
  - **Numbers** evaluate to false if +0, -0, or NaN, otherwise true
  - **Strings** evaluate to false if an empty string '', otherwise true

- Avoid inline conditionals. Every conditional (with single or multiple statements) should use curly brackets `{}`. The only exception to this rule is else if.

```javascript
// bad
if (condition) statement;
else if (condition) statement;
else statement;

// good
if (condition) {
    statements
}
else if (condition) {
    statements
}
else {
    statements
}
```

- Use shortcuts. Them help us.

```javascript
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```

- Strict equality checks === should be used in favor of ==.

```javascript
// bad
if (foo == 'foo') {
    statement
}

// good
if (bar !== 'bar') {
    statement
}

// bad
if (bar != 'bar') {
    statement
}

// good
if (foo === 'foo') {
    statement
}
```