module.exports = block => {
  return (...args) => {
    return args
      .filter(arg => Array.isArray(arg) || typeof arg === 'string')
      .map(arg => Array.isArray(arg) ? arg.map(a => `${block}--${a}`) : arg)
      .map(arg => typeof arg === 'string' ? `${block}__${arg}` : arg)
      .map(arg => Array.isArray(arg) ? arg.join(' ') : arg)
      .join(' ') || block
  }
}
