#!/usr/bin/env node

const {
  log,
  dir,
  deepLog,
} = require('./00-lib');

/* 多重继承 */
const x = {
  nx: 'x-1',
  mx() { log(this.nx); }
};

const y = {
  ny: 'y-1',
  my() { log(this.ny); }
};

// mix
let obj1 = { name: 'obj1' };

obj1 = Object.assign(obj1, x, y);
dir(obj1, 1);

obj1.mx();
obj1.my();

// prototype chain
let obj2 = { name: 'obj2' };
Object.setPrototypeOf(obj2, x);
deepLog(obj2);
Object.setPrototypeOf(Object.getPrototypeOf(obj2), y);
deepLog(obj2);
