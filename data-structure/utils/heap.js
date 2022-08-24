/**
 * 堆节点
 */
export class HeapNode {
    sort
    data
    
    constructor(sort, data) {
        this.sort = sort
        this.data = data
    }
}

/**
 * 最小堆
 * 特点：
 * - 最小堆每个节点都不小于父节点
 * - 最小堆总是一棵完全二叉树
 * 作用：实现优先队列，动态处理最小优先级的数据
 */
export class MinHeap {
    #data = []
    
    get size() {
        return this.#data.length
    }
    
    /**
     * 最后一个非叶子节点
     * n / 2 + 1
     * @returns {number}
     */
    get lastNonLeaf() {
        return Math.floor(this.size / 2) - 1
    }
    
    /**
     * 父节点
     * (i - 1) / 2
     * @param i
     * @returns {number|number}
     */
    static #parent(i) {
        return i === 0 ? 0 : Math.floor((i - 1) / 2)
    }
    
    /**
     * 左子节点
     * 2 * i + 1
     * @param i
     * @returns {number}
     */
    static #leftChild(i) {
        return 2 * i + 1
    }
    
    /**
     * 右子节点
     * 2 * i + 2
     * @param i
     * @returns {number}
     */
    static #rightChild(i) {
        return 2 * i + 2
    }
    
    /**
     * 交换位置
     * @param i
     * @param j
     */
    #swap(i, j) {
        [this.#data[j], this.#data[i]] = [this.#data[i], this.#data[j]]
    }
    
    /**
     * 向上调整堆
     * @param i
     */
    #adjustUp(i) {
        while (i > -1) {
            const parent = MinHeap.#parent(i)
            const parentNode = this.#data[parent]
            const currentNode = this.#data[i]
            if (currentNode.sort < parentNode.sort) {
                this.#swap(parent, i)
                i = parent
            } else {
                break
            }
        }
    }
    
    /**
     * 向下调整堆
     * @param i
     */
    #adjustDown(i) {
        while (i <= this.lastNonLeaf) {
            const leftChild = MinHeap.#leftChild(i)
            const rightChild = MinHeap.#rightChild(i)
            const leftChildNode = this.#data[leftChild]
            const rightChildNode = this.#data[rightChild]
            const currentNode = this.#data[i]
            
            // 最有一个叶子节点可能只有左节点
            if (rightChildNode && rightChildNode.sort < leftChildNode.sort) {
                if (rightChildNode.sort < currentNode.sort) {
                    this.#swap(i, rightChild)
                    i = rightChild
                } else {
                    break
                }
            } else {
                if (leftChildNode.sort < currentNode.sort) {
                    this.#swap(i, leftChild)
                    i = leftChild
                } else {
                    break
                }
            }
        }
    }
    
    /**
     * 是否是空堆
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }
    
    /**
     * 添加元素（向堆尾添加，然后向上调整堆）
     * @param item
     */
    add(item) {
        if (!(item instanceof HeapNode)) throw new Error('Type Error')
        this.#data[this.size] = item
        this.#adjustUp(this.size - 1)
    }
    
    /**
     * 弹出堆顶元素，然后向下调整堆
     * @returns {*}
     */
    pop() {
        if (!this.isEmpty()) return
        const ret = this.#data[0]
        this.#data[0] = this.#data[this.size - 1]
        this.#data.length--
        this.#adjustDown(0)
        return ret
    }
    
    /**
     * 获取堆顶元素
     * @returns {*}
     */
    getTop() {
        return this.#data[0]
    }
    
    /**
     * 显示堆元素
     */
    display() {
        console.log('最小堆元素：')
        console.log(this.#data.map(item => JSON.stringify(item)).join(','))
    }
}
