#!/usr/bin/env node

const log = console.log;

function h(p) {
  if(p == 0) return Infinity;
  if(p == 1) return 0;
  return (-1 * p * Math.log2(p) - (1-p) * Math.log2(1-p)).toFixed(3);
}

function validate(p) {
  if(isNaN(p)) {
    log('Probability is not a number!');
    return false;
  }

  if(p<0 || p>1) {
    log('Probability is not between 0 and 1!');
    return false;
  }

  return true;
}

function main() {
  if(process.argv.length != 3) {
    log('Missing probability!');
    log('Usage: command probability');
    return;
  }

  const p = Number(process.argv[2]);

  if(!validate(p)) return;

  log(`h(${p}) = ${h(p)} bit`);
}

main();
