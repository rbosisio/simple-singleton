# simple-singleton

This module provides a function to make your classes singleton.

### Installation

``` sh
npm install simple-singleton
```

### Example

To export class as singleton:

``` node
const singleton = require('simple-singleton');

class SomeClass {
  ...
}

module.exports = singleton(SomeClass);

```

To transform some class into a singleton class:

``` node
const singleton = require('simple-singleton');

const SingletonSomeClass = singleton(SomeClass);

```
