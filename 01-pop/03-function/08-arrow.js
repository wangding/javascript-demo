#!/usr/bin/env node

/*
function sum(x, y) {
  return x + y;
}

const sum = (x, y) => {
  return x + y;
};
*/

const sum = (x, y) => x + y;

const x = 2, y = 3;
console.log(`${x} + ${y} = ${sum(x, y)}`);
