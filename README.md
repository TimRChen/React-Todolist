## TodoList by React
*  this is a todolist. by @TimRChen

## how to start
    npm install .
    npm start

## version

### 0.0.4 v
*   删除任务功能`closed`
*   全选功能`closed`
*   清除已完成功能`continue`
*   单选功能与全选功能逻辑层面产生冲突`continue`

### 0.0.4 bug
*   this.setState 出现bug:
```js
let list = this.state.list
list.splice(index, 1);
this.setState({
    list: list // 相当于=> nextState: this.state.list
});
```
this.state.list的值在splice中被改变了，此时更新的值与nextState值相同，**nextState与this.state.list是同一个对象的两个不同引用**。

#### 0.0.4 bug解决
*   方法1、通过React提供工具集`lodash`中的`cloneDeep`方法对this.state.list深度拷贝
```js
import _ from 'lodash';

let list = _.cloneDeep(this.state.list);
list.splice(index, 1);
this.setState({
    list: list
});
```
*   方法2、通过引入`immutability-helper`的`update`方法解决this.state.list更新问题**`推荐`**
```js
import update from 'immutability-helper';

let list = update(this.state.list, {$splice: [[index, 1]]});
this.setState({
    list: list
});
```
>   ref:
>   https://facebook.github.io/react/docs/update.html
>   https://github.com/kolodny/immutability-helper

![喜欢可以Follow一下](https://raw.githubusercontent.com/TimRChen/photoRepo/master/React-Item/2017_04.gif)

### 0.0.3 v
*   在中间的任务列表里，由checkbox来控制任务的状态`closed`
*   已完成的任务有一个line-through的样式`closed`
*   当鼠标移到每一个任务时，都会出现删除按钮提供删除`closed`

![喜欢可以Follow一下](https://raw.githubusercontent.com/TimRChen/photoRepo/master/React-Item/2017_03.gif)

### 0.0.2 v
*   更改默认样式

![喜欢可以Follow一下](https://raw.githubusercontent.com/TimRChen/photoRepo/master/React-Item/2017_02.gif)

### 0.0.1 v
*   实现TodoList添加功能

![喜欢可以Follow一下](https://raw.githubusercontent.com/TimRChen/photoRepo/master/React-Item/2017_01.gif)


