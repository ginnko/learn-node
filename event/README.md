# 事件模块
事件模块只提供了一个对象:`events.EventEmitter`,`EventEmitter`的核心就是事件触发与事件监听器功能的封装。

*这个教程把事件回调函数叫做监听器，感觉有点别扭。。。*

## 回调函数中的 **this**

事件监听回调函数中的`this`被自动绑定到`EventEmitter`实例上，详见[这里](https://nodejs.org/dist/latest-v11.x/docs/api/events.html#events_passing_arguments_and_this_to_listeners)。

