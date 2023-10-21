#!/usr/bin/env node

const log = console.log;
let   std = {
  name: 'lisi',
  age:  '20',
  print() {
    log(`name: ${this.name}`);
    log(`age : ${this.age}`);
  }
};

// 扩展属性或方法
const contact = {
  qq:     '408542507',
  mobile: '13582027613'
};
log(std);
std = {...std, ...contact};
log(std);

// 序列化和反序列化对象
// 会丢失对象中的方法
const str = JSON.stringify(std);
log(str);
log(JSON.parse(str));

// 计算属性
let i = 1;
const getProperty = () => `p${i++}`;

const fe = {
  [getProperty()]: 'html',
  [getProperty()]: 'css',
  [getProperty()]: 'js',
};
log(fe);

// 属性方法：getter, setter
// 只读属性，有 gettter 无 setter
const oth = {
  get name() { return 'zhangsan' },
  get age()  { return this._age },
  set age(n) { this._age = n },
  _age: 20,
};

log(oth.name);
oth.age = 22;
log(oth.age);

// 属性描述符
log(Object.getOwnPropertyDescriptor(oth, 'name'));
log(Object.getOwnPropertyDescriptor(std, 'name'));
log(Object.getOwnPropertyDescriptors(oth));

log(oth);
Object.defineProperty(oth, "_age", {
  enumerable: false,
});
log(Object.getOwnPropertyDescriptors(oth));
log(oth);

// 对象不可变
/*
1. 对象常量
结合writable:false和configurable:false就可以创建一个真正的常量属性
2. 禁止扩展
Object.preventExtensions(..)
3. 密封
Object.seal()
4. 冻结
Object.freeze()
*/

