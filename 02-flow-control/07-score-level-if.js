#!/usr/bin/env node

function validate(score) {
  let res = {
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
  let num = Number(score), level = '';

  if(num >= 90) {
    level = '优';
  }else if(num >=80 && num < 90) {
    level = '良';
  }else if(num >=70 && num < 80) {
    level = '中';
  }else if(num >=60 && num < 70) {
    level = '可';
  }else {
    level = '差';
  }
  return level;
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
