#!/usr/bin/env node

const log  = console.log;
const sum = (x, y) => x+y;
const size = arr => arr.length;
const total = arr => arr.reduce(sum);
const devide = (x, y) => x/y;
const average = arr => devide(total(arr), size(arr));

const array = [80, 90, 100];
log(average(array));
