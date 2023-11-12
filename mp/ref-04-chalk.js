#!/usr/bin/env node

const log = console.log;

const target = () => {};
const handler = {
  get(target, prop) {
    log(prop);
    return new Proxy(target, handler);;
  }
};

const chalk = new Proxy(target, handler);

/* ------------------------------------------ */

chalk.red.blue.red();  // red\nblue\nred
chalk.abc.xyz();       // abc\nxyz
