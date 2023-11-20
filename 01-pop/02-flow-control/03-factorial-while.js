#!/usr/bin/env node

let n = 4,
    i = 1,
    factorial = 1;

while(i <= n) {
  factorial *= i++;
}

console.log(`${n}! = ${factorial}`);
