for(let i=1; i<=9; i++) {
  print(i);
}

function print(n) {
  let line = '';
  for(let i=1; i<=n; i++) {
    line += `${i}*${n}=${i*n} `
  }
  console.log(line);
}
