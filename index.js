const allowedKeyTypes = ['string', 'number', 'symbol']

export default function amendObject (target, items) {
  if (items == null) return target

  if (typeof items[Symbol.iterator] !== 'function') {
    throw new TypeError(`Expected items to be an iterable, got ${typeof items}`)
  }

  for (const item of items) {
    if (typeof item !== 'object') {
      throw new TypeError(`Iterator value ${item} is not an entry object`)
    }

    if (!allowedKeyTypes.includes(typeof item[0])) {
      throw new TypeError(`Expected key to be one of types ${allowedKeyTypes.join(', ')}, got ${typeof item[0]}`)
    }

    target[item[0]] = item[1]
  }

  return target
}
