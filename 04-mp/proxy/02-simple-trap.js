#!/usr/bin/env node

const log  = console.log;
const target = { id: 'target' };
const handler = {  // simple trap
  get() { return 'trap here'; }
};
const proxy = new Proxy(target, handler);

/* ------------------------------------ */
// 读取值
log(target.id);      // => target
log(proxy.id);       // => trap here

// 设置值 -> 源对象
target.id = 'foo';
log(target.id);      // => foo
log(proxy.id);       // => trap here

// 设置值 -> 代理对象
target.id = 'bar';
log(target.id);      // => bar
log(proxy.id);       // => trap here

log(Object.create(target).id); // => bar
log(Object.create(proxy).id);  // => trap here
