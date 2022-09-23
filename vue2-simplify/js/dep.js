/**
 * 被观察者
 * - 把数据定义为一个被观察者
 * - 收集Watcher（观察者），建立依赖关系
 * - 数据变化时，给所有Watcher（观察者）发布通知
 */
export class Dep {
    static target = null // 暂存需要被添加的观察者（watcher）
    watchers = [] // 存储所有的观察者

    constructor() {}

    /**
     * 添加观察者（被监视的属性对应的观察者）
     * 在被观察的属性的getter方法里添加观察者
     * @param watcher 观察者
     */
    addSub(watcher) {
        if (!this.watchers.includes(watcher) && watcher && watcher.update) {
            this.watchers.push(watcher)
        }
    }

    /**
     * 向所有观察者发布通知
     */
    notify() {
        this.watchers.forEach(watcher => {
            watcher.update()
        })
    }
}
