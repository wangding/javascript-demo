#!/usr/bin/env node

function str2obj(str) {
  return {
    str,
    test:  reg.test(str),
    match: str.match(reg),
  };
}

function test(inputs) {
  console.table(inputs.map(str2obj));
}

// {  change the code in the brace

const inputs = [
  'abc',
  '13a',
];

const reg = /^\d+\w+$/g;

// }

test(inputs);
