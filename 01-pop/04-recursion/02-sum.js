#!/usr/bin/env node

function sum(...args) {
  return args.length === 0 ? 0 : args.pop() + sum(...args);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
