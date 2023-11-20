#!/usr/bin/env node

const {
  log,
  dir,
  deepLog,
} = require('./00-lib');

/* 没有原型的对象 */

const obj1 = Object.create({name: 'lisi'});
deepLog(obj1);
dir(Object.getPrototypeOf(obj1), 1);

const obj2 = Object.create(null);
obj2.name = 'lisi';
deepLog(obj2);
log(Object.getPrototypeOf(obj2));

const obj3 = Object.create(null, {
  name: {
    value: 'lisi'
  }
});
deepLog(obj3);
log(Object.getPrototypeOf(obj3));

const obj4 = {name: 'lisi'};
Object.setPrototypeOf(obj4, null);
deepLog(obj4);
log(Object.getPrototypeOf(obj4));

const obj5 = {name: 'lisi'};
obj5.__proto__ =  null;
deepLog(obj5);
log(Object.getPrototypeOf(obj5));
