import test from 'ava';
import b3m from './lib';

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
