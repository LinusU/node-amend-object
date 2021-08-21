export default function amendObject<T extends object> (target: T, items: null | undefined): T
export default function amendObject<T extends object, TKey extends PropertyKey = PropertyKey, TValue = any> (target: T, items: Iterable<readonly [TKey, TValue]>): T & { [key in TKey]: TValue }
