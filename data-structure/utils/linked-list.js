/**
 * 链表节点
 */
export class LkNode {
    _prior = null // 直接前驱指针
    _next = null // 直接后继指针
    data = null // 节点数据
    
    constructor(data) {
        this.data = data
    }
}

/**
 * 双向链表（支持循环）
 * 特点：从任意一个节点开始，都可以很方便的访问它的前驱节点和后继节点
 */
export class DoubleLinkedList {
    _head = null // 头节点指针
    _tail = null // 尾节点指针
    size = 0 // 链表长度
    
    /**
     * 是否是空链表
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }
    
    /**
     * 向链尾添加元素
     * @param node
     */
    append(node) {
        if (this.isEmpty()) {
            node._prior = node
            node._next = node
            this._head = node
            this._tail = node
        } else {
            node._prior = this._tail
            node._next = this._tail._next
            this._tail._next = node
            this._head._prior = node
            this._tail = node
        }
        this.size++
    }
    
    /**
     * 在某个元素之前插入元素
     * @param node
     * @param refNode
     */
    insertBefore(node, refNode) {
        if (!refNode) {
            this.append(node)
        } else {
            node._prior = refNode._prior
            node._next = refNode
            refNode._prior._next = node
            refNode._prior = node
            this._head === refNode && (this._head = node)
            this.size++
        }
    }
    
    /**
     * 删除元素
     * @param node
     */
    remove(node) {
        node._prior._next = node._next
        node._next._prior = node._prior
        node._prior = null
        node._next = null
        this.size--
    }
    
    /**
     * 获取链头元素
     * @returns {null}
     */
    getHead() {
        return this._head
    }
    
    /**
     * 获取链尾元素
     * @returns {null}
     */
    getTail() {
        return this._tail
    }
    
    /**
     * 显示链表元素
     */
    display() {
        console.log('双向链表中元素：')
        const arr = []
        let head = this._head
        while (head) {
            arr.push(head.data)
            head === this._tail ? (head = null) : (head = head._next)
        }
        console.log(arr.join(','))
    }
}
