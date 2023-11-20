#!/usr/bin/env node

function validate(score) {
  const res = {
    isWrong: false,
    reason:  ''
  };

  if(score === '') {
    res.isWrong = true;
    res.reason  = '不能为空';
    return res;
  }

  if(isNaN(Number(score))) {
    res.isWrong = true;
    res.reason  = '不是数值'; 
    return res;
  }

  if(Number(score) > 100 || Number(score) < 0) {
    res.isWrong = true;
    res.reason  = '超出范围';
  }

  return res;
}

function level(score) {
  const levels = ['差', '差', '差', '差', '差', '差', '可', '中', '良', '优', '优'];
  const index  = Math.floor(score/10);
  return levels[index];
}

function main() {
  const log = console.log,
        scores = ['', 29, 69, 72, 88, 91, 'ab', 121];

  scores.forEach(score => {
    const result = validate(score);
    result.isWrong ?
      log(`score = ${score}, ${result.reason}`) :
      log(`score = ${score}, level = ${level(score)}`);
  });
}

main();
