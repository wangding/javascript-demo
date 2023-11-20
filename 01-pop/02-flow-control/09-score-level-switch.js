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

  switch(Math.floor(num/10)) {
    case 10:
    case 9:
      level = '优';
      break;
    case 8:
      level = '良';
      break;
    case 7:
      level = '中';
      break;
    case 6:
      level = '可';
      break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      level = '差';
      break;
  }

  return level;
}

function main() {
  const log = console.log,
        scores = ['', 79, 64, 88, 199, 93, 23, 'ab'];

  scores.forEach(score => {
    const result = validate(score);
    result.isWrong ? 
      log(`score = ${score}, ${result.reason}`) :
      log(`score = ${score}, level = ${level(score)}`);
  });
}

main();
