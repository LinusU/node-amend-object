'use strict'

const assert = require('assert')
const amendObject = require('./')

const test = { a: 1 }
const returnValue = amendObject(test, [['b', 2], ['c', 3]])

assert.strictEqual(test, returnValue)
assert.deepStrictEqual(test, { a: 1, b: 2, c: 3 })

assert.throws(() => amendObject({}, 1337), TypeError)
