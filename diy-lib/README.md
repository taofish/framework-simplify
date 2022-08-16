# 内建函数实现

## utils/function.js

- Function.prototype.call
- Function.prototype.apply
- Function.prototype.bind

## utils/index.js

### new

new关键字会进行如下的操作:

1、创建一个空的简单对象（即{}）

2、为步骤1创建的对象添加__proto__属性（即用改属性链接到构造函数的原型对象）

3、将步骤1创建的对象作为构造函数的上下文（即this）

4、如果构造函数没有返回对象，则返回步骤1创建的对象

### instanceof

instanceof 用来检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

## utils/promise.js

- Promise.all

## utils/array.js

- Array.prototype.reduce
