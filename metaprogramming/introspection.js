#!/usr/bin/env node

const log = console.log;
const type = obj => Object.prototype
                          .toString
                          .call(obj)
                          .replace('[object ', '')
                          .replace(']', '');
function methods(obj) {
  const arr1 = Object.getOwnPropertyNames(obj),
        arr2 = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
  if(type(obj) == 'Object') arr2.length = 0;
  return arr1.concat(arr2);
}

/* ----------------------------------------- */
// 运行时可以查出语言构件，自省
class Greeting {
  constructor(text) { this.#text = text; }
  welcome() { log(this.#text); }
  [Symbol.toStringTag] = 'Greeting';
  #text = '';
}

let obj = new Greeting('hello');

log("obj's class:    ", type(obj));
log("obj's propertys:", methods(obj));

obj = {
  name: 'lisi',
  age: 20,
  print() { log(this.name, this.age) }
}

log("\nobj's class:    ", type(obj));
log("obj's propertys:", methods(obj));

// 运行时可以添加语言构件
obj.gender = 'M';
obj.work = () => log('do something...');
log("obj's propertys:", methods(obj));
