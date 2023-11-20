#!/usr/bin/env node

const {
  log,
  dir,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* 函数有两个原型的案例 1 */
// Object
dir(Object.__proto__); log('---Object.__proto__');
dir(Object.prototype); log('---Object.prototype');
printPrototypeChain(Object, 'Object');
deepLog(Object); log('---Object');

printPrototypeChain({name: 'lisi'});
deepLog({name: 'lisi'});

// String
dir(String.__proto__); log('---String.__proto__');
dir(String.prototype); log('---String.prototype');
printPrototypeChain(String, 'String');
deepLog(String); log('---String');

printPrototypeChain(String, 'String');
deepLog(new String('lisi'));

// Number
dir(Number.__proto__); log('---Number.__proto__');
dir(Number.prototype); log('---Number.prototype');
printPrototypeChain(Number, 'Number');
deepLog(Number); log('---Number');

printPrototypeChain(Number, 'Number');
deepLog(new Number(34));

// Boolean
dir(Boolean.__proto__); log('---Boolean.__proto__');
dir(Boolean.prototype); log('---Boolean.prototype');
printPrototypeChain(Boolean, 'Boolean');
deepLog(Boolean); log('---Boolean');

printPrototypeChain(Boolean, 'Boolean');
deepLog(new Boolean(true));

// RegExp
dir(RegExp.__proto__); log('---RegExp.__proto__');
dir(RegExp.prototype); log('---RegExp.prototype');
printPrototypeChain(RegExp, 'RegExp');
deepLog(RegExp); log('---RegExp');

printPrototypeChain(RegExp, 'RegExp');
deepLog(new RegExp('ab'));

// Function
dir(Function.__proto__); log('---Function.__proto__');
dir(Function.prototype); log('---Function.prototype');
printPrototypeChain(Function, 'Function');
deepLog(Function); log('---Function');

printPrototypeChain(Function, 'Function');
deepLog(()=>true);

// Array
dir(Array.__proto__); log('---Array.__proto__');
dir(Array.prototype); log('---Array.prototype');
printPrototypeChain(Array, 'Array');
deepLog(Array); log('---Array');

printPrototypeChain(Array, 'Array');
deepLog([1,2]);
