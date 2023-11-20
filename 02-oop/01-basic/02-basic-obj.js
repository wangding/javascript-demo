#!/usr/bin/env node

const log = console.log;
const std = {
  name: 'lisi',
  age:  '20',
  print() {
    log(`name: ${this.name}`);
    log(`age : ${this.age}`);
  }
};

// 使用属性或方法
log(std);
log(std.name);
std.print();
std['age'] = 22;
std['print']();
log(std.toString());

// 添加属性或方法
std.sex = 'M';
std.fn = function() {
  this.print();
  log(`sex : ${this.sex}`);
};
std.fn();

// 删除属性或方法
log(std);
delete std.fn;
log(std);

// 查询属性或方法
log('sex' in std);
log('fn'  in std);

log(std.hasOwnProperty('name'));
log(std.hasOwnProperty('print'));
log(std.hasOwnProperty('toString'));

log(std.propertyIsEnumerable('name'));
log(std.propertyIsEnumerable('toString'));

// 遍历属性或方法
for(let attr in std) {
  log(`${attr}: ${std[attr]}`);
}
