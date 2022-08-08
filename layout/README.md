# 布局
## 两栏布局（左侧固定+右侧自适应）
- 1、利用浮动，左边元素宽度固定，设置向左浮动。右边元素margin-left设为固定宽度。右边元素width默认为auto，自动撑满父元素。
- 2、利用浮动，左边元素宽度固定，设置向左浮动。右边元素设置overflow:hidden触发BFC（BFC区域不会与浮动元素重叠）。
- 3、利用flex，左边元素宽度固定。右边元素设置flex:1。
- 4、利用absolute（绝对定位），父元素relative（相对定位）。左边元素设置position:absolute，宽度固定。右边元素的margin-left设为左边元素的宽度值。
- 5、利用absolute（绝对定位），父元素relative（相对定位）。左边元素宽度固定。右边元素position:absolute，left为左边宽度大小，其余方向（top、right、bottom）为0。

## 三栏布局（圣杯布局和双飞翼布局）
### 圣杯布局和双飞翼布局布局目的：
- 三栏布局，中间一栏最先加载和渲染
- 两侧宽度固定，中间宽度自适应
- 一般用于PC网页

### 圣杯布局和双飞翼布局技术总结：
- 使用float布局
- 两侧使用margin负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，圣杯布局用padding，双飞翼布局用margin