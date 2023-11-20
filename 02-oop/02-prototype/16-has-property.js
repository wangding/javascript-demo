#!/usr/bin/env node

const {
  log,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* prototype-of */
const a = { na: 'a', ma() { log('ma'); } };
const b = { nb: 'b', mb() { log('mb'); } };
const c = { nc: 'c', mc() { log('mc'); } };

Object.setPrototypeOf(b, c);
Object.setPrototypeOf(a, b);

printPrototypeChain(a, 'a');
deepLog(a);

const asserts1 = [
  '"na" in a',
  '"ma" in a',
  '"nb" in a',
  '"mb" in a',
  '"nc" in a',
  '"mc" in a',
];

const asserts2 = [
  'a.hasOwnProperty("na")',
  'a.hasOwnProperty("ma")',
  'a.hasOwnProperty("nb")',
  'a.hasOwnProperty("nc")',
  'a.hasOwnProperty("mb")',
  'a.hasOwnProperty("mc")',
];

function trueOrFalse(assert) {
  log(`${assert} is`, eval(assert));
}

asserts1.forEach(trueOrFalse);
asserts2.forEach(trueOrFalse);
