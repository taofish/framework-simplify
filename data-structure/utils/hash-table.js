/**
 * 哈希数据
 */
export class HashData {
    key // 存储哈希键
    value // 哈希值
    
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

/**
 * 哈希表
 * 描述：根据键直接访问值的数据结构
 * 特点：
 * - 根据键直接访问值
 * - 哈希函数：键到值地址的映射函数
 * - 冲突：不同的键通过哈希函数得到相同的值地址
 * - 处理冲突方法：线性探测、分离链接等
 * - 线性探测：如果发生冲突，从当前位置开始向后遍历，找到空位并插入
 * - 分离链接：为哈希表每个位置创建一个链表来存储元素
 */
export class HashTable {
    #table = [] // 存储哈希数据
    
    /**
     * lose lose 散列函数，获取哈希地址
     * @param key
     * @returns {number}
     */
    static #hashCode(key) {
        let hash = 0
        key = String(key)
        for (let i = 0; i < key.length; i++) {
            // 字符指定位置的 Unicode 编码相加
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    
    /**
     * 添加数据
     * @param key
     * @param value
     */
    put(key, value) {
        let address = HashTable.#hashCode(key)
        const hashData = this.#table[address]
        if (!hashData) {
            this.#table[address] = new HashData(key, value)
        } else {
            // 线性探测，寻找空位
            while (this.#table[++address]) {
            }
            this.#table[address] = new HashData(key, value)
        }
    }
    
    /**
     * 查询数据
     * @param key
     * @returns {*}
     */
    get(key) {
        let address = HashTable.#hashCode(key)
        let hashData = this.#table[address]
        let value
        while (hashData) {
            if (hashData.key === key) {
                value = hashData.value
                break
            }
            hashData = this.#table[++address]
        }
        return value
    }
    
    /**
     * 删除数据
     * @param key
     */
    remove(key) {
        let address = HashTable.#hashCode(key)
        let hashData = this.#table[address]
        while (hashData) {
            if (hashData.key === key) {
                this.#table[address] = undefined
                break
            }
            hashData = this.#table[++address]
        }
    }
    
    /**
     * 显示所有哈希数据
     */
    display() {
        console.log('哈希表元素：')
        const arr = []
        for (let i = 0; i < this.#table.length; i++) {
            const hashData = this.#table[i]
            hashData ? arr.push(JSON.stringify(hashData)) : hashData
        }
        console.log(arr.join(','))
    }
}
