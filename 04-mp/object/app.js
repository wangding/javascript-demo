#!/usr/bin/env node

function deepLog(obj) {
  obj["proto"] = Object.getPrototypeOf(obj);
  console.dir(obj, { showHidden: true, depth: 1 });
}

function main() {
  const obj = {a: 1, b: 2};

  console.dir(obj);
  deepLog(obj);
}

main();
