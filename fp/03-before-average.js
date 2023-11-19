#!/usr/bin/env node

const log  = console.log;

const array = [80, 90, 100];
let total = 0;
for(let i=0; i<array.length; i++) {
  total += array[i];
}
log(total/array.length);
