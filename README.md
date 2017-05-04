# b3m
Easy af BEM formatter which uses the [two-dashes-style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

[![Build Status](https://travis-ci.org/entwicklerstube/b3m.svg?branch=master)](https://travis-ci.org/entwicklerstube/b3m)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![https://github.com/entwicklerstube/b3m](https://img.shields.io/npm/dm/b3m.svg)](https://www.npmjs.com/package/b3m)


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
cn({ is: 'clickable' }) // button--is-clickable
cn({ hidden: true }) // button--hidden
cn({ hasIcon: true }) // button--has-icon
cn({ status: 'hasIcon' }) // button--status-has-icon
cn({ iconType: 'emoji' }) // button--icon-type-emoji

// If you pass something empty it returns a empty string, e.g.
cn({})
cn([])
cn('')
```

## Example
**React**
```jsx
import React from 'react'
import b3m from 'b3m'

const cn = b3m('element')

export default ({buttonStatus = 'visible', iconModifiers = ['big-icon']}) => (
  <div className={cn()}>
    <button className={cn('button', { status: buttonStatus, blue: true, hover: false })}></button>
    <div className={cn('icon', iconModifiers)}></div>
  </div>  
)

// rendered:

<div class="element">
  <button class="element__button element--status-visible element--blue"></button>
  <div class="element__icon element--big-icon"></div>
</div>  

```
