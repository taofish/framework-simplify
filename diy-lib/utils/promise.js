/**
 * promise.all
 * @param promises Iterator类型的参数（eg: Array，Map， Set，String）
 * @returns {Promise<unknown>}
 */
Promise.diyAll = function(promises) {
    return new Promise((resolve, reject) => {
        if (!promises || typeof promises[Symbol.iterator] !== 'function') throw new Error('Type Error')

        let count = 0
        let len = 0
        const res = []

        for (const item of promises) {
            const index = len
            len++
            Promise.resolve(item).then(data => {
                res[index] = data
                if (++count === len) {
                    resolve(res)
                }
            }).catch(e => {
                reject(e)
            })
        }

        if (len === 0) {
            resolve([])
        }
    })
}
