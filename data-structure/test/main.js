// import { Stack } from '../utils/stack.js'
//
// const stack = new Stack(10)
// console.log('栈空：', stack.isEmpty())
// for (let i = 0; i < 10; i++) {
//     stack.push(i)
// }
// stack.display()
// console.log('退一次栈')
// stack.pop()
// console.log('栈顶元素：', stack.getTop())
// console.log('退一次栈')
// stack.pop()
// stack.display()

import { Queue } from '../utils/queue.js'

const queue = new Queue(10)
console.log('队列空：', queue.isEmpty())
for (let i = 0; i < 10; i++) {
    queue.in(i)
}
queue.display()
console.log('出一次队')
queue.out()
console.log('队头元素：', queue.getHead())
console.log('出一次队')
queue.out()
queue.display()
