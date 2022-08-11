/**
 * 深拷贝
 * @param target 拷贝目标
 * @param map 暂存循环引用
 * @returns {*[]|any}
 */
export function deepClone(target, map = new WeakMap()) {
    // 原始类型直接返回
    if (!target || typeof target !== 'object') return target

    // 循环引用直接返回
    if (map.get(target)) return map.get(target)

    const cloned = Array.isArray(target) ? [] : {}

    // 暂存循环引用
    map.set(target, cloned)

    // 拷贝
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            cloned[key] = deepClone(target[key], map)
        }
    }

    return cloned
}

/**
 * 防抖动函数
 * @param fn 调用函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns {function(...[*]): *}
 */
export function debounce(fn, wait, immediate) {
    if (typeof fn !== 'function') throw new Error('Type Error')

    wait = wait || 0
    immediate = immediate || false

    let callThis, callArgs, callTime, result, timerId

    // 调用函数
    const invokeFn = function() {
        result = fn.apply(callThis, callArgs)
    }
    // 定时器回调函数
    const onTimeout = function() {
        const now = Date.now()
        const passed = now - callTime
        if (wait > passed) {
            timerId = setTimeout(onTimeout, wait - passed)
        } else {
            timerId = null
            if (!immediate) invokeFn()
            if (!timerId) callThis = callArgs = undefined
        }
    }
    // 防抖动处理函数
    const debounceHandle = function(...args) {
        callThis = this
        callArgs = args
        callTime = Date.now()
        if (!timerId) {
            timerId = setTimeout(onTimeout, wait)
            if (immediate) invokeFn()
        }
        return result
    }
    // 取消延时
    debounceHandle.cancel = function() {
        if (timerId) clearTimeout(timerId)
        timerId = callThis = callArgs = undefined
    }
    return debounceHandle
}
