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
