#!/usr/bin/env node

const log = console.log;

const PROGRESS_BAR_STYLE = {
  GRAPHIC: Symbol(),
  CHARACTER: Symbol(),
};

Object.freeze(PROGRESS_BAR_STYLE);

function getBar(n, opt) {
  let left = '', right = '';

  const percent = opt.percent ? 
    (Math.round(n*100/opt.length)+'% ').padStart(5, ' ') : '';

  if(opt.style === PROGRESS_BAR_STYLE.GRAPHIC) {
    left  = `${'■'.repeat(n)}`;
    right = `${'□'.repeat(opt.length-n)}`;
  }

  if(opt.style === PROGRESS_BAR_STYLE.CHARACTER) {
    left = `[${'='.repeat(n)}>`;
    right = `${' '.repeat(opt.length-n)}]`;
  }

  return percent + left + right;
}

function progressBar(options) {
  options = options ?? {};
  options = Object.assign({
    length: 20,
    percent: true,
    style: PROGRESS_BAR_STYLE.CHARACTER,
  }, options);

  let n=0;

  const timer = setInterval(()=>{
    console.clear();
    console.log(getBar(n++, options));
    if(n>options.length) clearInterval(timer);
  }, 500);
}

let opts = {
  length: 20,
  percent: true,
  style: PROGRESS_BAR_STYLE.CHARACTER,
};

progressBar(opts);
