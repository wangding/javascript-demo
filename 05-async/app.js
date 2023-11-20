#!/usr/bin/env node

const log  = console.log;

const five = () => Promise.resolve(5);
(async ()=>{
  log(await five());
})();
