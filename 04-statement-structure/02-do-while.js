//let n = window.prompt('计算 n!，请输入 n'),
let n = 4,
    i = 1,
    factorial = 1;

do {
  factorial *= i++;
} while(i <= n);

console.log(`${n}! = ${factorial}`);
