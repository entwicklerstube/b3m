import test from 'ava';
import b3m from './index';

test('Returns the passed block-class and build a class-string', t => {
  const cn = b3m('button')
  t.is(cn(), 'button')
})

test('Returns the passed string as block in BEM format', t => {
  const cn = b3m('button')
  t.is(cn('max'), 'button__max')
})

test('Returns class-string with multiple classes if you pass more strings', t => {
  const cn = b3m('button')
  t.is(cn('max', 'min'), 'button__max button__min')
})

test('Returns class-string with double dashes if string is passed as array', t => {
  const cn = b3m('button')
  t.is(cn(['clickable']), 'button--clickable')
})

test('Returns passed object into modifier if key is truth', t => {
  const cn = b3m('button')
  t.is(cn({clickable: true}), 'button--clickable')
})

test('Returns passed object without key if prop is false', t => {
  const cn = b3m('button')
  t.is(cn({clickable: false}), 'button')
})

test('Returns passed object without key if prop is false', t => {
  const cn = b3m('button')
  t.is(cn({clickable: true}), 'button--clickable')
})

test('Returns passed object and used key and prop of object since they`re not boolean', t => {
  const cn = b3m('button')
  t.is(cn({is: 'hidden'}), 'button--is-hidden')
})

test('Returns passed object and used key and prop of object and converts the camelCase key into dashes', t => {
  const cn = b3m('button')
  t.is(cn({isHidden: true}), 'button--is-hidden')
  t.is(cn({status: 'isHidden'}), 'button--status-is-hidden')
})
