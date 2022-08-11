import * as utils from './utils/index.js'

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
let count = 0
const onClick = utils.debounce(function(e) {
    e.target.innerText = ++count
}, 1000, true)
targetDom.addEventListener('click', onClick)
cancelDom.addEventListener('click', function() {
    onClick.cancel()
})

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