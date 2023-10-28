#!/usr/bin/env node

const {
  log,
} = require('./00-lib');

/* 函数有两个原型的案例 2 */
log(({name: 'lisi'}).__proto__ == Object.prototype);
log('lisi'.__proto__ == String.prototype);
log(new Number(34).__proto__ == Number.prototype);
log(true.__proto__ == Boolean.prototype);
log(/ab/.__proto__ == RegExp.prototype);
log((()=>true).__proto__ == Function.prototype);
log([1,2].__proto__ == Array.prototype);
