import { Observer } from './observer.js'
import { Compiler } from './compiler.js'

export class Vue {
    $options = null
    $data = null
    $el = null

    constructor(options = {}) {
        // 保存选项数据
        this.$options = options
        const {
            data,
            el
        } = options || {}
        this.$data = data || {}
        this.$el = typeof el === 'string' ? document.querySelector(el) : el
        // 代理数据到vue实例上
        this._proxyData(data)
        // 数据劫持，把数据转换成响应式
        new Observer(data)
        // 编译模版，建立依赖关系
        new Compiler(this)
    }

    /**
     * 代理data数据到Vue实例上
     * @param data
     * @private
     */
    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newValue) {
                    if (data[key] === newValue) return
                    data[key] = newValue
                }
            })
        })
    }
}
