## Strings

- Prefer single quotes over double quotes.

```javascript
// bad
var string = "<p class='foo'>Lorem Ipsum</p>";

// good
var string = '<p class="foo">Lorem Ipsum</p>';
```

- Hexidecimal colors are written uppercase.

```javascript
// bad
var color = '#d96ab6';

// good
var color = '#D96AB6';
```

- Strings longer than 80 characters should be written across multiple lines using string concatenation.

```javascript
// bad
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
var errorMessage = 'This is a super long error that \
was thrown because of Batman. \
When you stop to think about \
how Batman had anything to do \
with this, you would get nowhere \
fast.';

// good
var errorMessage = 'This is a super long error that ' +
  'was thrown because of Batman. ' +
  'When you stop to think about ' +
  'how Batman had anything to do ' +
  'with this, you would get nowhere ' +
  'fast.';
```