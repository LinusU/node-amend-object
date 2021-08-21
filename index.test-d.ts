import { expectType } from 'tsd-check'
import amendObject from './index.js'

expectType<{ a: number }>(amendObject({ a: 1 }, null))
expectType<{ a: number }>(amendObject({ a: 1 }, undefined))

expectType<{ a: number, b: number }>(amendObject({ a: 1 }, [['b', 2]]))
expectType<{ a: number, b: string }>(amendObject({ a: 1 }, [['b', '']]))

expectType<{ a: number, b: number, c: number, d: number }>(amendObject({ a: 1 }, [['b', 2], ['c', 3], ['d', 4]]))

expectType<{ a: number } & Record<any, any>>(amendObject({ a: 1 }, [['' as any, '' as any]]))
