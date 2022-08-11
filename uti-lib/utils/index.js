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
 * 防抖动（防止函数被频繁执行）
 * 非立即执行：停止触发并延迟时间结束后执行一次
 * 立即执行：访问时立即执行一次
 * @param fn 调用函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns {function(...[*]): *}
 */
export function debounce(fn, wait = 0, immediate = false) {
    if (typeof fn !== 'function') throw new Error('Type Error')

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
            if (!immediate) invokeFn()
            timerId = callThis = callArgs = undefined
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

/**
 * 节流（防止函数被频繁执行）
 * 原理：持续触发，延迟时间内只执行一次
 * @param fn 调用函数
 * @param wait 延迟时间
 * @param leading 是否在在节流开始前调用，默认调用
 * @param trailing 是否在在节流结束后调用，默认调用
 * @returns {function(...[*]): *}
 */
export function throttle(fn, wait = 0, {
    leading,
    trailing
} = {}) {
    if (typeof fn !== 'function') throw new Error('Type Error')

    const disabledLeading = leading === false // 禁止在节流开始前调用
    const disabledTrailing = trailing === false // 禁止在节流结束后调用
    let callThis, callArgs, invokeTime = 0, result, timerId
    // 调用函数
    const invokeFn = function() {
        result = fn.apply(callThis, callArgs)
    }
    // 定时器回调函数
    const onTimeout = function() {
        invokeFn()
        invokeTime = Date.now()
        timerId = callThis = callArgs = undefined
    }
    // 节流处理函数
    const throttleHandle = function(...args) {
        callThis = this
        callArgs = args
        const now = Date.now()
        // 使不会在节流开始前调用
        if (disabledLeading && !invokeTime) invokeTime = now
        // 下次调用剩余时间
        const remaining = wait - (now - invokeTime)
        if (remaining <= 0 || remaining > wait) {
            // 没有剩余时间或系统时间被修改
            invokeFn()
            if (timerId) clearTimeout(timerId)
            invokeTime = now
            timerId = callThis = callArgs = undefined
        } else if (!timerId && !disabledTrailing) {
            // 延迟时间结束后调用
            timerId = setTimeout(onTimeout, remaining)
        }
        return result
    }
    // 取消延迟
    throttleHandle.cancel = function() {
        if (timerId) clearTimeout(timerId)
        invokeTime = 0
        timerId = callThis = callArgs = undefined
    }
    return throttleHandle
}
