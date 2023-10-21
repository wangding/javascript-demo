#!/usr/bin/env node

const log = console.log;
const arr = [5, 4, 8, 2, 4];

log(arr.indexOf(8));
log(arr.indexOf(9));
log();
log(arr.lastIndexOf(4));
log(arr.lastIndexOf(9));
log();
log(arr.includes(8));
log(arr.includes(9));
log();
log(arr.find(item => item>5));
log(arr.findIndex(item => item>5));
log();

const courses = [
  {name: 'html'},
  {name: 'css'},
  {name: 'javascript'},
];

log(courses.find(item => item.name=='css'));
log(courses.findIndex(item => item.name=='css'));
