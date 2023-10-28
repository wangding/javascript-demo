#!/usr/bin/env node

const {
  log,
  dir,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* 查看对象的原型链 */
const arr = [1, 2, 3];

dir(arr);
dir(arr.__proto__);
dir(arr.__proto__.__proto__);
dir(arr.__proto__.__proto__.__proto__);

const a = {a:1};
const b = {b:2};

log(a.__proto__ == b.__proto__);
dir(a);
dir(a.__proto__);
dir(a.__proto__.__proto__);

printPrototypeChain(a, 'a');
deepLog(a);
printPrototypeChain(arr, 'arr');
deepLog(arr);
