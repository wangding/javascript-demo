// get score
let score = window.prompt('Please input score:');

// validate score
let result = validate(score);

if(result.isWrong) {
  console.log(result.reason);
} else { // get level and print result
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

  if(num >= 90) {
    level = '优秀';
  }else if(num >=80 && num < 90) {
    level = '良好';
  }else if(num >=70 && num < 80) {
    level = '中等';
  }else if(num >=60 && num < 70) {
    level = '可以';
  }else {
    level = '较差';
  }

  console.log(`score = ${score}, level = ${level}`);
}
