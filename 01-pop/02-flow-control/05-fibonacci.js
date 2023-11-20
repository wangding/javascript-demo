#!/usr/bin/env node

let n = 15,
    i = 2,
    fibonacci = [0, 1];

while(i <= n) {
  fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
  i++;
}

for(let i of fibonacci) {
  console.log(i);
}
