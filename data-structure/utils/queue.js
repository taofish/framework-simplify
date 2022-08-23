/**
 * 队列
 * 特点：先入先出
 */
export class Queue {
    _item = [] // 存储队列元素
    
    /**
     * 队列长度
     * @returns {number}
     */
    get size() {
        return this._item.length
    }
    
    /**
     * 入队
     * @param item
     */
    enQueue(item) {
        this._item.push(item)
    }
    
    /**
     * 出队
     * @returns {*}
     */
    deQueue() {
        return this._item.shift()
    }
    
    /**
     * 是否是空队列
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }
}
