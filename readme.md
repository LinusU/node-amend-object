# Amend Object

Update an object from an iterable of key/value-pairs.

## Installation

```sh
npm install --save amend-object
```

## Usage

```js
const amendObject = require('amend-object')

const me = {
  firstName: 'Linus',
  lastName: 'Unnebäck'
}

amendObject(me, [
  ['firstName', 'Steve'],
  ['lastName', 'Jobs']
])

console.log(me)
// => { firstName: 'Steve', lastName: 'Jobs' }
```

## API

### `amendObject(obj, items) => object`

Update object `obj` with `items`.

`items` should be an iterable (e.g. an array) where each item is a key/value pair.

If the same key is specified twice, the latter will take precedence.

A `TypeError` will be thrown in the following conditions:

- `items` is not an iterable
- any element in `items` is not an object (usually an array, but can be object with the keys `0` and `1`)
- any key is not a string or a number
