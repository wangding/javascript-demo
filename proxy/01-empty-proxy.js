#!/usr/bin/env node

const log  = console.log;
const target = { id: 'target' };
const handler = {};  // empty proxy
const proxy = new Proxy(target, handler);

/* ------------------------------------ */
// 读取值
log(target.id);      // => target
log(proxy.id);       // => target

// 设置值 -> 源对象
target.id = 'foo';
log(target.id);      // => foo
log(proxy.id);       // => foo

// 设置值 -> 代理对象
target.id = 'bar';
log(target.id);      // => bar
log(proxy.id);       // => bar

// hasOwnProperty()
log(target.hasOwnProperty('id'));  // => true
log(proxy.hasOwnProperty('id'));   // => true

// prototype
log(Proxy.prototype);  // undefined
log(target === proxy); // false
