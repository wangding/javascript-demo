#!/usr/bin/env node

const log = console.log;
const ms = [];

function m1(next) {
  log(1);
  next();
  log(2);
}

function m2(next) {
  log(3);
  next();
  log(4);
}

function m3(next) {
  log(5);
  next();
  log(6);
}

const use = fn => ms.push(fn);
use(m1);
use(m2);
use(m3);

function compose(i=0) {
  return (i==ms.length)
    ? () => log('end')
    : () => ms[i](compose(i+1));
}

let fn = compose();
fn();
