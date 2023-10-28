#!/usr/bin/env node

const {
  log,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* prototype-of */
const a = { ma() { log('ma'); } };
const b = { mb() { log('mb'); } };
const c = { mc() { log('mc'); } };

Object.setPrototypeOf(b, c);
Object.setPrototypeOf(a, b);

printPrototypeChain(a, 'a');
deepLog(a);

const asserts = [
  'b.isPrototypeOf(a)',
  'c.isPrototypeOf(b)',
  'c.isPrototypeOf(a)',
  'Object.prototype.isPrototypeOf(a)',
];

function trueOrFalse(assert) {
  log(`${assert} =`, eval(assert));
}

asserts.forEach(trueOrFalse);
