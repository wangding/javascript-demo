#!/usr/bin/env node

function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

function main() {
  const log = console.log;
  const num = Number(process.argv[2]);

  if(process.argv.length != 3) {
    log('Missing argument!');
    log('Usage: command number');
    return;
  }

  if(isNaN(num)) {
    log('Argument is not a number!');
    return;
  }

  if(num < 0) {
    log('Argument is a negative number!');
    return;
  }

  if(num - Math.floor(num) > 0) {
    log('Argument is a integer!');
    return;
  }

  log(`${num}! = ${factorial(num)}`);
}

main();
