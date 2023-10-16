#!/usr/bin/env node

function hidden(origin, length, position=pos.LEFT) {
  if(origin == '' || length <=0) return origin;
  if(length >= origin.length) return '*'.repeat(origin.length);

  let left = mid = right = '';
  switch(position) {
    case pos.LEFT:
      left  = '*'.repeat(length);
      right = origin.slice(length);
      break;

    case pos.MIDDLE:
      const leftLen  = Math.round((origin.length - length)/2);
      left  = origin.slice(0, leftLen);
      mid   = '*'.repeat(length);
      right = origin.slice(leftLen+length, origin.length);
      break;

    case pos.RIGHT:
      left  = origin.slice(0, origin.length-length);
      right = '*'.repeat(length);
      break;

    default:
      throw new Error('错误的 position 参数！');
  }
  return left + mid + right;
}

const pos = {
  LEFT:   Symbol(),
  MIDDLE: Symbol(),
  RIGHT:  Symbol(),
};

Object.freeze(pos);

console.log(hidden('abcdef',  0));
console.log(hidden('abcdef',  6));
console.log(hidden('abcdef',  9));
console.log(hidden('abcdef',  3));
console.log(hidden('abcdef',  3, pos.RIGHT));
console.log(hidden('abcdef',  3, pos.MIDDLE));
console.log(hidden('abcdefg', 3, pos.MIDDLE));
