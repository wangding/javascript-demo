#!/usr/bin/env node

const log = console.log;
const {exit} = process;

function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

function validate(num) {
  const verify = ([k,v]) => `if(${k}) { log('${v}'); exit();}`;
  const asserts = [
    ['process.argv.length != 3', 'Missing argument!\\nUsage: command number'],
    ['isNaN(num)', 'Argument is not a number!'],
    ['num < 0', 'Argument is a negative number!'],
    ['num != Math.floor(num)', 'Argument is not a integer!'],
  ];
  eval(asserts.map(verify).join(''));
}

function main() {
  const num = Number(process.argv[2]);
  validate(num);
  log(`${num}! = ${factorial(num)}`);
}

main();
