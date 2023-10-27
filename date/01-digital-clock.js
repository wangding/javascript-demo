#!/usr/bin/env node

const log = console.log;

setInterval(()=>{
  console.clear();
  log(new Date().toTimeString().slice(0,8));
}, 1000);
