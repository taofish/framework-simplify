/**
 * 队列
 * 特点：
 * - 先入先出
 * - 队尾插入，队头删除
 */
export class Queue {
    _maxSize = 0 // 最大容量
    _front = 0 // 对头指针
    _rear = -1 // 队尾指针
    _data = {} // 存储队列元素
    
    constructor(maxSize) {
        if (typeof maxSize !== 'number' || maxSize < 0) throw new Error('Type Error')
        this._maxSize = maxSize
    }
    
    /**
     * 队列长度
     * @returns {number}
     */
    get size() {
        return this.isEmpty() ? 0 : this._rear - this._front
    }
    
    /**
     * 是否是空队列
     * @returns {boolean}
     */
    isEmpty() {
        return this._rear < this._front
    }
    
    /**
     * 入队
     * @param item
     */
    in(item) {
        if (this.size === this._maxSize) {
            console.log('队列溢出！')
        } else {
            this._data[++this._rear] = item
        }
    }
    
    /**
     * 出队
     * @returns {*}
     */
    out() {
        if (this.isEmpty()) {
            console.log('队列已空！')
        } else {
            const ret = this._data[this._front]
            delete this._data[this._front]
            this._front++
            return ret
        }
    }
    
    /**
     * 获取队头元素
     * @returns {*}
     */
    getHead() {
        if (this.isEmpty()) {
            console.log('队列空！')
        } else {
            return this._data[this._front]
        }
    }
    
    /**
     * 显示队列元素
     */
    display() {
        console.log('队列中元素:')
        const arr = []
        let front = this._front
        const rear = this._rear
        while (front <= rear) {
            arr.push(this._data[front++])
        }
        console.log(arr.join(','))
    }
}

