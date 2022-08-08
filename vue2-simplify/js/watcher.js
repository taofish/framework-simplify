import { Dep } from './dep.js'

/**
 * 订阅者
 * 订阅依赖的变化
 * eg: v-text:xxx、{{xxx}}
 */
export class Watcher {
    vm = null
    key = ''
    cb = () => void undefined
    oldValue = ''

    constructor(vm, key, cb) {
        this.vm = vm
        this.key = key // data的属性名称
        this.cb = cb // 收到变化的回调

        Dep.target = this
        this.oldValue = vm[key] // 取值，触发被监听属性的getter，把当前watcher添加到被监听属性dep的订阅者数组里
        Dep.target = null
    }

    /**
     * 接收发布者的通知
     */
    update() {
        const newValue = this.vm[this.key]
        if (this.oldValue === newValue) return
        this.cb(newValue)
    }
}
