# webpack
- webpack是一个用于Javascript应用程序的==静态模块打包工具==。
- 当webpack处理应用程序时，从一个或多个入口点构建依赖图，然后将项目中的每一个模块组合成一个或多个包（bundles）。

## 概念

### 入口（entry）
入口起点（entry point）指示webpack应该使用哪个模块来作为构建依赖图的开始。

### 输出（output）
输出（output）属性告诉webpack在哪里输入它所创建的包（bundle）,以及如何命名这些文件。

### 加载器（loader）
webpack只能理解Javascript和Json，这是webpack开箱可用的自带能力。loader让webpack能去处理其他类型的文件，并将他们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。

### 插件（plugin）
loader用来转换某些类型的模块，而插件可以执行范围更广的任务，来拓展webpack能力。包括打包优化、资源管理、注入环境变量等。

## 自定义

### 编写loader
loader是导出一个函数的node模块。当资源应该用这个loader加载的时候调用该函数。给定的函数可以通过this访问Loader API。

eg: loaders/atxt-loader.js

### 自定义插件
自定义插件可以让开发者在webpack构建流程引入自定义行为。
webpack插件包括：
- 一个Javascript命名函数或Javascript类。
- 在插件函数的原型（prototype）上定义一个apply方法。
- 指定要使用的事件钩子（hook）。
- 操作webpack内部实例特定的数据。
- 功能完成后调用webpack提供的回调（callback）。

eg: plugins/rm-dist-plugin.js
