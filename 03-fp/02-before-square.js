#!/usr/bin/env node

const log  = console.log;

const array = [0,1,2,3,4,5,6,7,8,9];
for(let i=0; i<array.length; i++) {
  array[i] = array[i]**2;
}
log(array);
