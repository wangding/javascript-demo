#!/usr/bin/env node

function bubbleSort(arr, cb) {
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++) {
      let tmp;
      if(cb(arr[i],arr[j])>0) {
        tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

function main() {
  const log = console.log;
  const data = [5, 4, 8, 2];
  log(bubbleSort(data, (x,y)=>x-y));
  log(bubbleSort(data, (x,y)=>y-x));
}
