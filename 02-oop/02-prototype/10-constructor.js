#!/usr/bin/env node

const {
  log,
  dir,
} = require('./00-lib');

/* 构造函数 */
function User() {}
const lisi = new User();

dir(User.prototype, 1);
log(User.prototype.constructor === User);

dir(Object.getPrototypeOf(lisi), 1);
log(Object.getPrototypeOf(lisi).constructor === User);
