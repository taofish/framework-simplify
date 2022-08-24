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

// import { Queue } from '../utils/queue.js'
//
// const queue = new Queue(10)
// console.log('队列空：', queue.isEmpty())
// for (let i = 0; i < 10; i++) {
//     queue.in(i)
// }
// queue.display()
// console.log('出一次队')
// queue.out()
// console.log('队头元素：', queue.getHead())
// console.log('出一次队')
// queue.out()
// queue.display()

// import { LkNode, DoubleLinkedList } from '../utils/linked-list.js'
//
// const doubleLinkedList = new DoubleLinkedList()
// console.log('链表空：', doubleLinkedList.isEmpty())
// console.log('在链表尾部添加元素')
// for (let i = 0; i < 2; i++) {
//     doubleLinkedList.append(new LkNode(i))
// }
// doubleLinkedList.display()
// console.log('在某个节点之前前插入元素')
// const node5 = new LkNode(5)
// doubleLinkedList.insertBefore(node5, doubleLinkedList.getHead())
// doubleLinkedList.insertBefore(new LkNode(6), doubleLinkedList.getHead())
// doubleLinkedList.insertBefore(new LkNode(7), node5)
// doubleLinkedList.display()
// console.log('删除一个元素')
// doubleLinkedList.remove(node5)
// doubleLinkedList.display()
// console.log('链表元素个数：', doubleLinkedList.size)

import { HashTable } from '../utils/hash-table.js'

const hashTable = new HashTable()
for (let i = 0; i < 2; i++) {
    hashTable.put(`hash-key-${i}`, `hash-value-${i}`)
}
hashTable.display()
hashTable.put('哈希表', 'hash-table')
hashTable.display()
hashTable.put('数据结构', 'data-structure')
hashTable.display()
hashTable.remove('哈希表')
hashTable.display()
console.log(hashTable.get('数据结构'))
console.log(hashTable.get('哈希表'))
console.log(hashTable.get('hash-key-1'))
