#!/usr/bin/env node

const log = console.log;

const a = [1, 2, 3],
      b = [4, 5, 6];

log(a.concat(b));

b[Symbol.isConcatSpreadable] = false;
log(a.concat(b));
