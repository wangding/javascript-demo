#!/usr/bin/env node

const log = console.log;

const a = {a:1, b:2};
log(a instanceof Array);
log(a instanceof Object);

class Egg {
  static [Symbol.hasInstance](obj) {
    log(obj);
    log("I'm invoked");
    return true;
  }
}

log(a instanceof Egg);
