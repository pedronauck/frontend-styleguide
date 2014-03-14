```javascript
// Ruim
// função make que recebe um parâmetro tag
// que retorna um elemento
function make(tag) {
  // alguma ação
  return element;
}

// Bom
/**
 * make() retorna um novo element
 * baseado no que foi passado na tag name
 *
 * @param <String> tag
 * @return <Element> element
 */
function make(tag) {
  // alguma ação
  return element;
}
```
