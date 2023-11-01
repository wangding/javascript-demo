#!/usr/bin/env node

const log = console.log;
const num10 = 34, num = '11';

const num2  = '0b' + num10.toString(2);
const num8  = '0o' + num10.toString(8);
const num16 = '0x' + num10.toString(16);

log(`${num10} => ${num2}`);
log(`${num10} => ${num8}`);
log(`${num10} => ${num16}`);

log(`${num2} => ${new Number(num2).valueOf()}`);
log(`${num8} => ${new Number(num8).valueOf()}`);
log(`${num16} => ${new Number(num16).valueOf()}`);

log(`0b${num} => ${parseInt(num, 2)}`);
log(`0o${num} => ${parseInt(num, 8)}`);
log(`0x${num} => ${parseInt(num, 16)}`);
