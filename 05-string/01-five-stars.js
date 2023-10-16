#!/usr/bin/env node

function stars() {
  const n = Math.round(Math.random()*5);
  return '\u2605'.repeat(n)+'\u2606'.repeat(5-n);
}

function evaluation() {
  console.log(`专业技能：${stars()}`);
  console.log(`服务态度：${stars()}`);
  console.log(`沟通及时：${stars()}`);
}

evaluation();
