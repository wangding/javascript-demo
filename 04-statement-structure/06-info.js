let p, h;

do {
  p = window.prompt('Please input p:');
} while(isWrong(p));

function isWrong(p) {
  if(p === '') return true;
  if(isNaN(Number(p))) return true;
  if(Number(p) < 0 || Number(p) > 1) return true;

  return false;
}

h = -1 * p * Math.log2(p) - (1-p) * Math.log2(1-p);
h = Math.floor(h * 100)/100;

console.log(`h(${p}) = ${h} bit`);
