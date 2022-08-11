/**
 * new
 * @param fn
 * @param args
 * @returns {*|{__proto__: *}}
 */
export function diyNew(fn, ...args) {
    const obj = {
        __proto__: fn.prototype
    }
    const res = fn.apply(obj, args)
    return typeof res === 'object' ? res : obj
}
