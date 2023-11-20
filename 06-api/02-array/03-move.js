#!/usr/bin/env node

// 移动数组中的元素
const log = console.log;
const arr = [1, 2, 3, 4, 5];

function move(array, from, to) {
  const newArray = [...array];
  const item = newArray.splice(from, 1);
  newArray.splice(to, 0, ...item);
  return newArray;
}

log(move(arr, 0, 3));
