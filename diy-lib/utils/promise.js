/**
 * promise.all
 * @param promises 迭代器（Iterator）（eg: Array，Map， Set，String）
 * @returns {Promise<unknown>}
 */
Promise.diyAll = function(promises) {
    return new Promise((resolve, reject) => {
        if (!promises || typeof promises[Symbol.iterator] !== 'function') throw new Error('Type Error')

        let count = 0 // 完成计数
        let len = 0 // 迭代器个数
        const res = [] // 返回数组

        // 遍历迭代器
        for (const item of promises) {
            const index = len++ // 返回值索引
            Promise.resolve(item).then(data => {
                res[index] = data // 保存返回值
                if (++count === len) {
                    // 全部resolve
                    resolve(res)
                }
            }).catch(e => {
                // 有失败
                reject(e)
            })
        }

        // 处理空Iterator的情况
        if (len === 0) {
            resolve([])
        }
    })
}
