import { Stack } from '../utils/stack.js'

const stack = new Stack(10)
console.log('栈空：', stack.isEmpty())
for (let i = 0; i < 10; i++) {
    stack.push(i)
}
stack.display()
console.log('退一次栈')
stack.pop()
console.log('栈顶元素：', stack.getTop())
console.log('退一次栈')
stack.pop()
stack.display()
