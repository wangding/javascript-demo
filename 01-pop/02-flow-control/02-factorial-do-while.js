#!/usr/bin/env node

let n = 4,
    i = 1,
    factorial = 1;

do {
  factorial *= i++;
} while(i <= n);

console.log(`${n}! = ${factorial}`);
