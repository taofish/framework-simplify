import './utils/function.js'
import './utils/index.js'
import { diyNew } from './utils'

const obj = {
    val: 1
}

function testA(x = 0, y = 0) {
    return this.val + x + y
}

console.log('obj', obj)
console.log('testA.diyCall(obj)', testA.diyCall(obj))
console.log('testA.diyCall(obj, 2, 3)', testA.diyCall(obj, 2, 3))
console.log('testA.diyApply(obj)', testA.diyApply(obj))
console.log('testA.diyApply(obj, [3, 4])', testA.diyApply(obj, [
    3,
    4
]))

const testB = testA.diyBind(obj, 5)
console.log('testB(6)', testB(6))

function bar(name, age) {
    this.habit = 'shopping'
    this.name = name
    this.age = age
}

bar.prototype.friend = 'kevin'

let bindFoo = bar.bind(obj, 'Jack')
let bindFooObj = new bindFoo(20)
console.log('bindFooObj', bindFooObj)
console.log('bindFooObj constructor', bindFooObj.constructor)
console.log('bindFooObj __proto__', bindFooObj.__proto__)

let diyBindFoo = bar.diyBind(obj, 'Jack')
let diyBindFooObj = new diyBindFoo(20)
console.log('diyBindFooObj', diyBindFooObj)
console.log('diyBindFooObj constructor', diyBindFooObj.constructor)
console.log('diyBindFooObj __proto__', diyBindFooObj.__proto__)
bar.prototype.friend = '2'

function testD(name, age) {
    this.name = name
    this.age = age
}

testD.prototype.jump = true

const testE = diyNew(testD, 'tao', 20)
console.log('testE', testE)
