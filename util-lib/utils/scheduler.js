/**
 * 带并发限制的任务调度器
 */
export class Scheduler {
    waitTasks = [] // 等待执行的任务队列
    executingTasks = [] // 正在执行的任务队列
    maxExecNum = 2 // 最大并发执行的任务数

    constructor({ maxExecNum = this.maxExecNum } = {}) {
        this.maxExecNum = maxExecNum
    }

    /**
     * 添加任务
     * @param promiseMaker 返回promise的函数
     */
    add(promiseMaker) {
        if (this.executingTasks.length < this.maxExecNum) {
            this.run(promiseMaker)
        } else {
            this.waitTasks.push(promiseMaker)
        }
    }

    /**
     * 运行任务
     * @param promiseMaker 返回promise的函数
     */
    run(promiseMaker) {
        const len = this.executingTasks.push(promiseMaker)
        const index = len - 1
        promiseMaker().then(() => {
            this.executingTasks.splice(index, 1)
            if (this.waitTasks.length) {
                this.run(this.waitTasks.shift())
            }
        })
    }
}
