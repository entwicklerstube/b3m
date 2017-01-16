# b3m
Easy af BEM formatter which uses the [two-dashes-style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

[![Build Status](https://travis-ci.org/entwicklerstube/b3m.svg?branch=master)](https://travis-ci.org/entwicklerstube/b3m)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Usage
> Pass a string and it's a block, pass a array and it's a modifier

```js
import b3m from 'b3m'

const cn = b3m('button')

cn() // button
cn('element') // button__element
cn('element', 'blue') // button__element button__blue
cn(['action', 'disabled']) // button--action button--disabled
cn('element', ['action']) // button__element button--action
```
