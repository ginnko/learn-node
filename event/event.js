const events = require('events');
const event = new events.EventEmitter();

/**
 * 简单的事件触发过程
**/

// event.on('someEvent', function() {
//   console.log('触发some_event事件');
// });

// setTimeout(function() {
//   event.emit('someEvent');
// }, 1000);

/**
 * 事件触发时，注册到这个事件的事件监听器被以此调用，事件参数作为回调函数参数传递
**/
let counter = 0;
const cb1 = function(a1, a2) {
  console.log('listener1', a1, a2);
};
const cb2 = function(a1) {
  console.log('listener2', a1);
};
const cb_once = function() {
  console.log('我只运行了一次。');
};
const cb_add = function() {
  console.log('我是通过addListener方式添加的事件监听回调函数。');
};

event.on('newListener', function(event, listener) {
  console.log(`事件-${event}: ${listener.name}`);
});

event.on('someEvent', cb1);

event.on('someEvent', cb2);

event.on('removeListener', function(event, listener) {
  console.log(`${event}事件移除了事件监听回调函数${listener.name}。`);
});

const timer = setInterval(function() {
  event.emit('someEvent', 'a1参数', 'a2参数');
  counter++;
  if (counter === 3) {
    event.removeListener('someEvent', cb_add);
  }
  if (counter > 3) {
    clearInterval(timer);
    console.log('someEvent事件的监听回调函数数量：', event.listenerCount('someEvent'));
    console.log('列出事件监听回调函数:', event.listeners('someEvent'));
  }
}, 1000);

event.once('someEvent', cb_once);

event.addListener('someEvent', cb_add);
