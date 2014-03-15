```javascript
// Ruim
var string = '<p class="foo">Lorem Ipsum</p>';
var color = "#d96ab6";
var message = 'The color'+color+'is pink!',
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// Bom
var string = '<p class="foo">Lorem Ipsum</p>',
    color = '#D96AB6',
    message = 'The color' + color + 'is pink!',
    errorMessage = 'This is a super long error that ' +
                   'was thrown because of Batman. ' +
                   'When you stop to think about ' +
                   'how Batman had anything to do ' +
                   'with this, you would get nowhere ' +
                   'fast.';
```
