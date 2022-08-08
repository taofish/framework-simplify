import { Dep } from './dep.js'

/**
 * 数据劫持
 * - 遍历数据，使用Dep把数据转换为发布者
 * - 遍历数据，把数据转换为响应式（getter/setter）
 * - 数据变化时，使用Dep（发布者）给Watcher（订阅者）发送通知
 */
export class Observer {
    constructor(data) {
        this.walk(data)
    }

    /**
     * 遍历对象所有属性
     * @param data
     */
    walk(data) {
        // 判断data是否是对象
        if (!data || typeof data !== 'object') return
        // 遍历data对象所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    /**
     * 把对象属性转换为响应式（getter/setter）
     * @param obj 对象
     * @param key 键
     * @param val 值
     * @returns {*}
     */
    defineReactive(obj, key, val) {
        const that = this
        // 使用dep，把属性定义为发布者
        const dep = new Dep()
        // 如果val是对象，递归调用转换为响应式对象
        this.walk(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 建立依赖关系
                Dep.target && dep.addSub(Dep.target)
                return val // obj[key]会触发递归，所有需要传递一个val
            },
            set(newValue) {
                if (val === newValue) return
                val = newValue
                // 如果新值是对象的话，递归调用转换为响应式对象
                that.walk(newValue)
                // 向所有订阅者发布通知
                dep.notify()
            }
        })
    }
}
