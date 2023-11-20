#!/usr/bin/env node

/* 用递归算法重构 */
function pyramid(n, layers=1) {
  if(layers > n) return '';
  const spaces = ' '.repeat(n - layers),
        starts = '*'.repeat(2*(layers-1) + 1);
  console.log(spaces + starts);
  pyramid(n, ++layers);
}

pyramid(6);
