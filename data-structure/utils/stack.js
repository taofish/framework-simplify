/**
 * 栈
 * 特点：
 * - 后进先出
 * - 仅在栈顶进行插入和删除操作
 */
export class Stack {
    _maxSize = 0 // 最大容量
    _top = -1 // 栈顶指针
    _data = [] // 存储栈中元素
    
    constructor(maxSize) {
        if (typeof maxSize !== 'number' || maxSize < 0) throw new Error('Type Error')
        this._maxSize = maxSize
    }
    
    /**
     * 是否是空栈
     * @returns {boolean}
     */
    isEmpty() {
        return this._top === -1
    }
    
    /**
     * 入栈
     * @param item
     */
    push(item) {
        if (this._top === this._maxSize - 1) {
            console.log('栈上溢出！')
        } else {
            this._data[++this._top] = item
        }
    }
    
    /**
     * 出栈
     * @returns {*}
     */
    pop() {
        if (this.isEmpty()) {
            console.log('栈已空！')
        } else {
            const ret = this._data[this._top]
            delete this._data[this._top]
            this._top--
            return ret
        }
    }
    
    /**
     * 获取栈顶元素
     * @returns {*}
     */
    getTop() {
        if (this.isEmpty()) {
            console.log('栈空！')
        } else {
            return this._data[this._top]
        }
    }
    
    /**
     * 显示栈中元素
     */
    display() {
        console.log('栈中元素：')
        const arr = []
        let top = this._top
        while (top > -1) {
            arr.unshift(this._data[top--])
        }
        console.log(arr.join(','))
    }
}
