#!/usr/bin/env node

const log = console.log;
const ms = [];

function m1(n) {
  log(1);
  return n+1;
}

function m2(n) {
  log(2);
  return n+2;
}

function m3(n) {
  log(3);
  return n+3;
}

const use = fn => ms.push(fn);
use(m1);
use(m2);
use(m3);

function compose() {
  let i, n = 0;
  for(i=0; i<ms.length; i++){
    n = ms[i](n);
  }
  return n;
}

log(compose());
