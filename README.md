# b3m
Easy af BEM formatter which uses the [two-dashes-style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

[![Build Status](https://travis-ci.org/entwicklerstube/b3m.svg?branch=master)](https://travis-ci.org/entwicklerstube/b3m)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install
**npm**
```
$ npm install b3m --save-dev
```

**yarn**
```
$ yarn add b3m --dev
```

## Usage
> Pass a string and it's a block, pass a array or object and it's a modifier.

```js
import b3m from 'b3m'

const cn = b3m('button')

cn() // button
cn('element') // button__element
cn('big', 'blue') // button__big button__blue
cn(['action', 'disabled']) // button--action button--disabled
cn('element', ['action']) // button__element button--action
cn(['action'], 'element') // button--action button__element
cn({is: 'clickable'}) // button--is-clickable
cn({hidden: true}) // button--hidden
cn({hasIcon: true}) // button--has-icon
cn({status: 'hasIcon'}) // button--status-has-icon
```
