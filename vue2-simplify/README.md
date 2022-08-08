# Vue 2 简化版

### Vue
- Vue总入口
- 代理数据到Vue实例上
- 调用Observer，把数据转换为响应式
- 调用Compiler，编译模版

### Dep (发布者-数据)
- 把数据定义为一个发布者
- 收集Watcher（订阅者），建立依赖关系
- 数据变化时，给所有Watcher（订阅者）发布通知

### Watcher (订阅者-模版)
- 把依赖数据变化而变化的内容（插值表达式、指令等）定义为订阅者
- 订阅Dep（发布者-数据），接收通知同步变化并更新视图

### Observer (数据劫持)
- 遍历数据，使用Dep把数据转换为发布者
- 遍历数据，把数据转换为响应式（getter/setter）
- 数据变化时，使用Dep（发布者）给Watcher（订阅者）发送通知

### Compiler (编译器)
- 编译模版，把插值表达式、指令等转换为Watcher（订阅者）
- 接收Dep（发布者-数据）通知，更新视图

# 参考
- https://github.com/vuejs/vue/tree/2.6
- https://zhuanlan.zhihu.com/p/337924416

