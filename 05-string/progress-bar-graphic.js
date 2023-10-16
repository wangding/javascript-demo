#!/usr/bin/env node

const log = console.log;

function progressBar() {
  let n=-1, total=20;
  const timer = setInterval(()=>{
    const left  = `${'■'.repeat(++n)}`,
          right = `${'□'.repeat(total-n)}`;
    console.clear();
    console.log(left+right);
    if(n>=total) clearTimeout(timer);
  }, 500);
}

progressBar();
