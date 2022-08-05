import { Observer } from './observer'
import { Compiler } from './compiler'

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
        // 把this.$data代理到vm上
        this._proxyData(data)
        // 数据劫持，把数据转换成响应式
        new Observer(data)
        // 编译模版，建立依赖关系
        new Compiler(this)
    }

    _proxyData() {

    }
}
