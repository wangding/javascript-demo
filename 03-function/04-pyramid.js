#!/usr/bin/env node

const log = console.log;

function pyramid(n) {
  for(let i=1; i<=n; i++) {
    const spaces = ' '.repeat(n - i),
          starts = '*'.repeat(2*(i-1) + 1);
    log(spaces + starts);
  }
}

function main() {
  if(process.argv.length != 3) {
    log('Missing argument!');
    log('Usage: command number-of-layers');
    return;
  }

  const num = Number(process.argv[2]);

  if(isNaN(num)) {
    log('Argument is not a number!');
    return;
  }

  if(num<1 || num>20) {
    log('Number of layers is not between 1 and 19!');
    return;
  }

  pyramid(num);
}

main();
