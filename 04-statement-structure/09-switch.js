// get score
let score = window.prompt('Please input score:');

// validate score
let result = validate(score);

if(result.isWrong) {
  console.log(result.reason);
} else { // judge level and print result
  getLevel(score);
}

function validate(score) {
  let res = {
    isWrong: false,
    reason:  ''
  };

  if(score === '') {
    res.isWrong = true;
    res.reason  = 'score 不能为空';
    return res;
  }

  if(isNaN(Number(score))) {
    res.isWrong = true;
    res.reason  = 'score 不是数值'; 
    return res;
  }

  if(Number(score) > 100 || Number(score) < 0) {
    res.isWrong = true;
    res.reason  = 'score 超出范围';
  }

  return res;
}

function getLevel(score) {
  let num = Number(score), level = '';

  switch(Math.floor(num/10)) {
    case 10:
    case 9:
      level = '优秀';
      break;
    case 8:
      level = '良好';
      break;
    case 7:
      level = '中等';
      break;
    case 6:
      level = '可以';
      break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      level = '较差';
      break;
  }

  console.log(`score = ${score}, level = ${level}`);
}
