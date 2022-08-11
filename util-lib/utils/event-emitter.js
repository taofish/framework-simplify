/**
 * 封装事件触发与事件监听器功能
 */
export class EventEmitter {
    events = {} // 存放事件

    /**
     * 添加事件监听器
     * @param name
     * @param fn
     */
    on(name, fn) {
        if (typeof fn !== 'function') throw new Error('Type Error')
        if (!this.events[name]) {
            this.events[name] = [fn]
        } else {
            this.events[name].push(fn)
        }
    }

    /**
     * 添加只执行一次的事件监听器
     * @param name
     * @param fn
     */
    once(name, fn) {
        if (typeof fn !== 'function') throw new Error('Type Error')
        const invokeFn = (...args) => {
            fn.apply(this, args)
            this.off(name, invokeFn)
        }
        this.on(name, invokeFn)
    }

    /**
     * 移除事件监听器
     * @param name
     * @param fn
     */
    off(name, fn) {
        // 移除所有事件监听器
        if (!name && !fn) {
            this.events = {}
            return
        }
        // 移除所有name事件监听器
        if (!fn) {
            this.events[name].length = 0
            return
        }
        if (!this.events[name]) return

        if (typeof fn !== 'function') throw new Error('Type Error')
        const index = this.events[name].indexOf(fn)
        if (index > -1) {
            this.events[name].splice(index, 1)
        }
    }

    /**
     * 事件触发
     * @param name
     * @param args
     * @returns {boolean}
     */
    emit(name, ...args) {
        if (!this.events[name]) return false
        this.events[name].forEach(fn => {
            fn.apply(this, args)
        })
        return true
    }
}
