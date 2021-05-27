//let n = window.prompt('计算 n!，请输入 n'),
let n = 4,
    factorial = 1;

for(let i=1; i<=n; i++) {
  factorial *= i;
}

console.log(`${n}! = ${factorial}`);
