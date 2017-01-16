# b3m
BEM classname formater

```js
import b3m from 'b3m';

const cn = b3m('button')

cn // button
cn() // button

// Shortcuts
cn('element') // button__element
cn(['action']) // button-action
cn('element',['action']) // button__element-action

// Normal usage
cn({modifiers: [], className: 'foobar'})
```

### Want the `double-dash` syntax?
Just import the module like:
```js
import b3m from 'b3m/double-dash';
```
Now the output of the functions will have the double-dash syntax


### React
#### Input
```html
<div className={cn}>
  <div className='{cn('element')}'>Some element</div>
  <button className='{cn(['action'])}'>Action!</button>
</div>
```
#### Output
```html
<div class="button">
  <div class="button__element">Some element</div>
  <button class="button--action">Action!</button>
</div>
```
