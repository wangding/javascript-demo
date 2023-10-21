#!/usr/bin/env node

function printLine(n) {
  let line = '';
  for(let i=1; i<=n; i++) line += `${i}*${n}=${i*n}`.padEnd(7, ' ');
  console.log(line);
}

function table() {
  for(let i=1; i<=9; i++) printLine(i);
}

table();
