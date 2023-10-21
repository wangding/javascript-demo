#!/usr/bin/env node

function find(arr, cb) {
  for(let item of arr) {
    if(cb(item)) return item;
  }
  return undefined;
}

function findIndex(arr, cb) {
  for(let item in arr) {
    if(cb(arr[item])) return item;
  }
  return undefined;
}

function main() {
  const log = console.log;
  const arr = [5, 4, 8, 2, 4];

  log(find(arr, item => item>5));
  log(arr.findIndex(item => item>5));
  log();

  const courses = [
    {name: 'html'},
    {name: 'css'},
    {name: 'javascript'},
  ];

  log(find(courses, item => item.name=='css'));
  log(findIndex(courses, item => item.name=='css'));
}

main();
