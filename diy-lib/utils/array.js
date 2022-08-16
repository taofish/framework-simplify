/**
 * Array.prototype.reduce
 * @param reducer 对数组中按顺序执行reducer函数，每次运行把先前元素的计算结果作为参数传入，最后将结果汇总为单个值
 * @param initialValue 第一次调用reducer函数的值，如果未传入，则使用元素的第一个值
 * @returns {*}
 */
Array.prototype.diyReduce = function(reducer, initialValue) {
    const array = this
    // 如果数组为空且未指定初始值 initialValue，则会抛出 TypeError
    if (!array.length && typeof initialValue === 'undefined') throw new Error('Type Error')

    let accValue = initialValue || array[0]
    let index = initialValue ? 0 : 1
    while (index < array.length) {
        accValue = reducer(accValue, array[index], index, array)
        index++
    }
    return accValue
}
