#!/usr/bin/env node

let n = 4,
    factorial = 1;

for(let i=1; i<=n; i++) {
  factorial *= i;
}

console.log(`${n}! = ${factorial}`);
