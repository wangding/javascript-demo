#!/usr/bin/env node

function sortArray(arr, type = 'asc') {
  return arr.sort((a,b) => type=='asc'? a-b: b-a);
}

const arr = [1, 3, 2, 6];
console.log(sortArray(arr));
console.log(sortArray(arr, 'desc'));
