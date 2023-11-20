#!/usr/bin/env node

const log  = console.log
      type = obj => Object.prototype.toString.call(obj),
      notFunction = key => type(process[key]) !== '[object Function]';

Object.keys(process)
      .filter(notFunction)
      .forEach(key => log(`${key}:`, process[key]));

