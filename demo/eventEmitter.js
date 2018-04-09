// addListener(event, listener)
// 为指定事件添加一个监听器到监听器数组的尾部。
// on(event, listener)
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
setTimeout(function() { 
    emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
}, 1000);