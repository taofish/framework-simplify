import { Watcher } from './watcher.js'

/**
 * 编译器
 * 建立数据与模版的依赖关系
 */
export class Compiler {
    vm = null
    el = null

    constructor(vm) {
        this.vm = vm
        this.el = vm.$el
        this.compile(this.el)
    }

    /**
     * 编译模版，处理文本和元素节点
     * @param el
     */
    compile(el) {
        const childNodes = el.childNodes // 伪数组
        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) {
                // 处理文本节点
                this.compileText(node)
            }
            if (this.isElementNode(node)) {
                // 处理元素节点
                this.compileElement(node)
            }

            // 如果有子节点，递归编译子节点
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    /**
     * 判断是否是文本节点
     * @param node
     * @returns {boolean}
     */
    isTextNode(node) {
        return node.nodeType === 3
    }

    /**
     * 编译文本节点，处理插值表达式
     * @param node
     */
    compileText(node) {
        const reg = /\{\{(.+?)\}\}/
        const content = node.textContent
        if (reg.test(content)) {
            const [, key] = reg.exec(content)
            node.textContent = content.replace(reg, this.vm[key])
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }

    /**
     * 判断是否是元素节点
     * @param node
     * @returns {boolean}
     */
    isElementNode(node) {
        return node.nodeType === 1
    }

    /**
     * 编译元素节点，处理指令
     * @param node
     */
    compileElement(node) {
        const attributes = node.attributes // 伪数组
        // 遍历所有属性节点
        Array.from(attributes).forEach(attr => {
            let attrName = attr.name
            // 判断是否是属性指令
            if (this.isDirective(attrName)) {
                let attrValue = attr.value
                this.compileDirective(node, attrName, attrValue)
            }
        })
    }

    /**
     * 判断愿你属性是否是指令
     * @param attrName
     * @returns {boolean}
     */
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    /**
     * 编译元素节点指令
     * @param node
     * @param attrName
     * @param attrValue
     */
    compileDirective(node, attrName, attrValue) {
        // v-text => text
        attrName = attrName.substring(2)
        const updaterFn = this[`${attrName}Updater`]
        const vmDataKey = attrValue
        updaterFn && updaterFn.call(this, node, this.vm[vmDataKey], vmDataKey)
    }

    /**
     * 处理v-text指令
     * @param node
     * @param value
     * @param key
     */
    textUpdater(node, value, key) {
        node.textContent = value
        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }

    /**
     * 处理v-model指令
     * @param node
     * @param value
     * @param key
     */
    modelUpdater(node, value, key) {
        node.value = value
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })
        // 双向绑定
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }
}
