/**
 * 交换数组两个元素的位置
 * @param arr
 * @param i
 * @param j
 */
function swap(arr, i, j) {
    [
        arr[i],
        arr[j]
    ] = [
        arr[j],
        arr[i]
    ]
}

/**
 * 分区，返回基准索引
 * @param arr
 * @param left
 * @param right
 * @returns {number}
 */
function partition(arr, left, right) {
    let pivot = left + 1
    let baseVal = arr[left]
    for (let i = pivot; i <= right; i++) {
        if (arr[i] < baseVal) swap(arr, pivot++, i)
    }
    swap(arr, left, --pivot)
    return pivot
}

/**
 * 快速排序
 * 算法步骤：
 * - 选基准：从数组中选一个元素（可以选第一个元素）
 * - 分区（重新排序数组）：比基准小的元素放在左边，比基准大的元素放在右边
 * - 递归：递归的把基准左右两边的子数组排序
 * @param arr 待排序数组
 * @param left 数组左边索引
 * @param right 数组右边索引
 * @returns {*}
 */
export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}
