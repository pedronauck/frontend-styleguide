```javascript
// Ruim
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// Bom
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();
```
