#!/usr/bin/env node

const {
  log,
  dir,
  deepLog,
} = require('./00-lib');

/* 对象的方法会覆盖原型链中的方法 */

const obj = {
  name: 'lisi',
}

deepLog(obj);

Object.getPrototypeOf(obj).show = function() {
  log('proto,', this.name);
};

deepLog(obj);
obj.show();

obj.show = function() {
  log('obj,', this.name);
};

deepLog(obj);
obj.show();
