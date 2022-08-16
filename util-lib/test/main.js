import * as utils from '../utils/index.js'
import { EventEmitter } from '../utils/event-emitter.js'
import { Scheduler } from '../utils/scheduler.js'

const targetDom = document.getElementById('target')
const cancelDom = document.getElementById('cancel')

// 深拷贝
// const obj = {
//     val: 1,
//     location: {
//         x: 1,
//         y: 2
//     },
//     arr: [
//         1,
//         2,
//         3
//     ],
//     n: null
// }
// obj.self = obj
// console.log('obj', obj)
// const cloned = utils.deepClone(obj)
// obj.val = 10
// obj.location.x = 20
// obj.arr.push(4)
// console.log('cloned', cloned)

// 防抖动
// let count = 0
// const onClick = utils.debounce(function(e) {
//     e.target.innerText = ++count
// }, 1000, true)
// targetDom.addEventListener('click', onClick)
// cancelDom.addEventListener('click', function() {
//     onClick.cancel()
// })

// 节流
// let count = 0
// const onClick = utils.throttle(function(e) {
//     e.target.innerText = ++count
// }, 3000, {
//     leading: false,
//     trailing: true
// })
// targetDom.addEventListener('click', onClick)
// cancelDom.addEventListener('click', function() {
//     onClick.cancel()
// })

// event-emitter
// const eventEmitter = new EventEmitter()
// const onTestE = function(...args) {
//     console.log('onTestE', args)
//     eventEmitter.off('test-e', onTestE)
//     console.log('eventEmitter', eventEmitter)
// }
// const onTestB = function(...args) {
//     console.log('onTestB', args)
//     eventEmitter.off('test-e')
//     console.log('eventEmitter', eventEmitter)
// }
// eventEmitter.on('test-e', onTestE)
// eventEmitter.on('test-e', onTestB)
// eventEmitter.on('test-b', onTestE)
// console.log('eventEmitter', eventEmitter)
// targetDom.addEventListener('click', () => {
//     eventEmitter.emit('test-e', 'aa', 'bb')
// })

// scheduler
// const promiseMaker = time => new Promise(resolve => setTimeout(resolve, time))
// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//     scheduler.add(() => promiseMaker(time).then(() => console.log(order)))
// }
// addTask(1000, 1)
// addTask(500, 2)
// addTask(400, 3)
// addTask(300, 4)

// uniqueArray
const arr = [
    1,
    2,
    3,
    2,
    1,
    5
]

console.log(arr, utils.uniqueArray(arr))
