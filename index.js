const is = (val, type) => {
  const objectType = Object.prototype.toString.call(val)
  return !!objectType.slice(8,(objectType.length-1)).match(new RegExp(type, 'gi'))
}

const dashify = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const removeNotSupportedTypes = val => is(val, 'array|string|object')

const handleBlocks = (block, val) => is(val, 'string') ? `${block}__${val}` : val

const handleModifiers = (block, val) => {
  if(is(val, 'array')) {
    return val.map(a => `${block}--${a}`)
  }

  if(is(val, 'object')) {
    return Object.keys(val).map(key => {
      return typeof val[key] === 'boolean' ? !!val[key] ? `${block}--${dashify(key)}` : block : `${block}--${key}-${dashify(val[key])}`
    })
  }

  return val
}

module.exports = block => (...args) => args
  .filter(removeNotSupportedTypes)
  .map(handleBlocks.bind(null, block))
  .map(handleModifiers.bind(null, block))
  .join(' ') || block
