#!/usr/bin/env node

const {
  dir,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* 函数有两个原型 */
function User(name) {
  this.name = name;
}

const lisi = new User('lisi');

dir(User.__proto__);
dir(User.prototype, 1);
printPrototypeChain(User, 'User');
deepLog(User);

printPrototypeChain(lisi, 'lisi');
deepLog(lisi);
