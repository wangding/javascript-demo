#!/usr/bin/env node

/* 可变参数函数 */
/*
function sum() {
  return [...arguments].reduce((x, y) => x + y);
}

function sum(...args) {
  return args.reduce((x, y) => x + y);
}
*/

const sum = (...args) => args.reduce((x,y) => x+y);

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
