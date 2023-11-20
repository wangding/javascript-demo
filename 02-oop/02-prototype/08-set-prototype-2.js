#!/usr/bin/env node

const {
  dir,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* 设置对象的原型 */
const shape = {
  area() {},
  perimeter(){},
};

const circle = {
  __proto__: shape,
  show(){},
};

deepLog(shape);
printPrototypeChain(circle, 'circle');
deepLog(circle);
dir(Object.getPrototypeOf(circle), 1);
