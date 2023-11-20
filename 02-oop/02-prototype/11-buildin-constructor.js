#!/usr/bin/env node

const {
  log,
  dir,
} = require('./00-lib');

/* 内置构造函数 */
const types = [
  'Object',
  'Function',
  'String',
  'Number',
  'Boolean',
  'Symbol',
  'Array',
  'Set',
  'WeakSet',
  'Map',
  'WeakMap',
  'Date',
  'RegExp',
  'Math',
  'Promise',
];

function print(type) {eval(`
  log('${type}');
  dir(${type});             // 类型的静态方法
  dir(${type}.__proto__);   // 构造函数的原型方法
  dir(${type}.prototype);   // 对象继承的方法
`)}

types.forEach(print);
