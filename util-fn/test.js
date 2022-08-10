import * as utils from './index.js'

const obj = {
    val: 1,
    location: {
        x: 1,
        y: 2
    },
    arr: [
        1,
        2,
        3
    ],
    n: null
}
obj.self = obj
console.log('obj', obj)
const cloned = utils.deepClone(obj)
obj.val = 10
obj.location.x = 20
obj.arr.push(4)
console.log('cloned', cloned)
