#!/usr/bin/env node

const iconv = require('iconv-lite');

function artical(num) {
  const str = [];
  for(let i=0; i<num; i++) {
    // heigher 起始值为 B0, lower 起始值为 A1
    // heigher 是区码共 72 个区
    // Lower   是位码共 94 个码
    const heigher = 176 + Math.round(Math.random()*71),
          lower   = 161 + Math.round(Math.random()*93);

    // GB2312 编码的汉字的 16 进制表示
    const gb2312Code = heigher.toString(16) + lower.toString(16);

    // 将 GB2312 编码的 16 进制字符串转换为 Buffer 对象
    const buf = Buffer.from(gb2312Code, 'hex');

    // 将 GB2312 编码的 Buffer 对象转换为 Unicode 字符
    str.push(iconv.decode(buf, 'gb2312'));
  }
  return str;
}

const len = process.argv[2] ?? 1000;
console.log(artical(len).join(''));
