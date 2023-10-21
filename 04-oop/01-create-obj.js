#!/usr/bin/env node

const log = console.log;

// method 1: 对象字面量
const std = {
  name: 'lisi',
  age: '20',
  print() {
    log(`name: ${this.name}`);
    log(`age:  ${this.age}`);
  }
};
log(std);

// method 2: new 实例化
const empt = new Object();
log(empt);

// method 3: 以一个对象为模板创建另一个对象，称为：原型创建，继承
const s = Object.create(std);
log(s);
//s.print();

// method 4: 工厂函数
function factory() {
  return {
    logo: '奔驰',
    price:'230000',
  }
}
const car = factory();
log(car);

// method 5: 对象组合
const oth = {
  sex: 'F',
  fn() {
    console.log(`sex: ${this.sex}`);
  }
};
const obj = Object.assign(std, oth);
log(obj);
