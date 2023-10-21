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

function getFn(next) {
  let fn = ms.pop();
  return () => fn(next);
}

function compose() {
  let i = 0, n = [];
  n.push(() => log('end'));
  do {
    n[i+1] = getFn(n[i]);
    i++;
  } while(ms.length>0);
  return n[i];
}

let fn = compose();
fn();
