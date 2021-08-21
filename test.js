'use strict'

const assert = require('assert')
const amendObject = require('./')

const test = { a: 1 }
const returnValue = amendObject(test, [['b', 2], ['c', 3]])

assert.strictEqual(test, returnValue)
assert.deepStrictEqual(test, { a: 1, b: 2, c: 3 })

assert.throws(() => amendObject({}, 1337), TypeError)

assert.deepStrictEqual(amendObject({ a: 1 }, undefined), { a: 1 })
assert.deepStrictEqual(amendObject({ a: 1 }, null), { a: 1 })

const symbol = Symbol('test')
assert.deepStrictEqual(amendObject({ a: 1 }, [[symbol, 'test']]), { a: 1, [symbol]: 'test' })
