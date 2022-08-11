/**
 * Function.prototype.call 函数
 * @param context
 * @param args
 * @returns {*}
 */
Function.prototype.diyCall = function(context, ...args) {
    console.log(args)
    if (typeof this !== 'function') throw new Error('Type Error')

    const tmpKey = Symbol() // 唯一的临时key
    let result
    context = context || window
    context[tmpKey] = this // 将方法设置为context属性
    result = context[tmpKey](...args)
    delete context[tmpKey] // 调用完删除

    return result
}

/**
 * Function.prototype.apply 函数
 * @param context
 * @param args
 * @returns {*}
 */
Function.prototype.diyApply = function(context, args = []) {
    return this.diyCall(context, ...args)
}

/**
 * Function.prototype.bind 函数
 * @param context
 * @param args
 * @returns {function(...[*]): any}
 */
Function.prototype.diyBind = function(context, ...args) {
    if (typeof this !== 'function') throw new Error('Type Error')

    const fn = this
    const bindFn = function(...fnArgs) {
        return fn.apply(this instanceof bindFn ? this : context, [
            ...args,
            ...fnArgs
        ])
    }
    // 绑定函数原型
    bindFn.prototype = this.prototype
    return bindFn
}
