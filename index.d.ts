declare function amendObject<T> (obj: T, items: null | undefined): T
declare function amendObject<T, V = any> (obj: T, items: [string, V][]): T & { [key: string]: V }
declare function amendObject<T, V = any> (obj: T, items: [number, V][]): T & { [key: number]: V }
declare function amendObject<T, V = any> (obj: T, items: [string | number, V][]): T & { [key: string]: V, [key: number]: V }
export = amendObject
