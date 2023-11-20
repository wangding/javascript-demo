#!/usr/bin/env node

/* 默认参数函数 */
const avg = (total, years = 1) => total / years;

console.log(avg(2000));
console.log(avg(2000, 2));
