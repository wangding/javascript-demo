#!/usr/bin/env node

const log = console.log;
const arr = [1, 2, 3, 4, 5];

/*---- insert ----*/
log('\ninsert:');
log(arr.toSpliced(0, 0, 9, 9));      // at head
log(arr.toSpliced(3, 0, 9, 9));      // at middle
log(arr.toSpliced(arr.length,0,9,9));// at tail

/*---- delete ----*/
log('\ndelete:');
log(arr.toSpliced(0, 1));           // at head
log(arr.toSpliced(2, 1));           // at middle
log(arr.toSpliced(arr.length-1, 1));// at tail

/*---- update ----*/
log('\nupdate:');
log(arr.toSpliced(0, 2, 9, 9)); // at head
log(arr.toSpliced(2, 2, 9, 9)); // at middle
log(arr.toSpliced(-2, 2, 9, 9));// at tail
