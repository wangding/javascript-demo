#!/usr/bin/env node

const log = console.log;
const num10 = 34, num = '11';

const params = [[2,'0b'], [8,'0o'], [16,'0x']];

const cs = [
  'const num<k> = "<v>" + num10.toString(<k>);',
  'log(`${num10} => ${num<k>}`);',
  'log(`${num<k>} => ${new Number(num<k>).valueOf()}`);',
  'log(`<v>${num} => ${parseInt(num, <k>)}`);',
];

const render = c => ([k,v]) => c.replace(/<k>/g,k).replace(/<v>/g,v);
const code = () => cs.map(c => params.map(render(c)).join('')).join('');

eval(code());
