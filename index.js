const is = (val, type) => {
  const objectType = Object.prototype.toString.call(val)
  return !!objectType.slice(8,(objectType.length - 1)).match(new RegExp(type, 'gi'))
}

const dashify = (str = '') => {
  if (typeof str !== 'string') return str
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const removeNotSupportedTypes = val => is(val, 'array|string|object')

const handleBlocks = (block, val) => is(val, 'string') && val.length > 0 ? `${block}__${val}` : val

const handleModifiers = (block, val) => {
  if(is(val, 'array')) {
    return val.length === 0 ?  '-1' : val.map(a => `${block}--${a}`)
  }

  if(is(val, 'object')) {
    const keys = Object.keys(val)

    return keys.length === 0 ? '-1' : Object.keys(val).map(key => {
      if(is(val[key], 'boolean')) {
        return !!val[key] ? `${block}--${dashify(key)}` : '-1'
      } else {
        return `${block}--${dashify(key)}-${dashify(val[key])}`
      }
    })
  }

  if(is(val, 'string')) {
    return val.length === 0 ? '-1' : val
  }

  return val
}

module.exports = block => (...args) => (args
    .filter(removeNotSupportedTypes)
    .map(handleBlocks.bind(null, block))
    .map(handleModifiers.bind(null, block))
    .join(' ')
    .replace(/,/g, ' ') || block
  ).replace(/-1/g,'').trim()
