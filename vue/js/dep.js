/**
 * 发布者
 * 每个被监视的属性都有一个dep，用来存储依赖关系
 */
export class Dep {
    static target = null // 暂存需要被添加的订阅者（watcher）
    watchers = [] // 存储所有的订阅者

    constructor() {}

    /**
     * 添加订阅者（被监视的属性对应的订阅者）
     * 在被观察的属性的getter方法里添加订阅者
     * @param watcher 订阅者
     */
    addSub(watcher) {
        if (!this.watchers.includes(watcher) && watcher && watcher.update) {
            this.watchers.push(watcher)
        }
    }

    /**
     * 向所有订阅者发布通知
     */
    notify() {
        this.watchers.forEach(watcher => {
            watcher.update()
        })
    }
}
