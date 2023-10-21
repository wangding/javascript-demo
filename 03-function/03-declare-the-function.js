#!/usr/bin/env node

const log = console.log;

// 声明方式 1，function 关键字
function sayHello_1(name) {
  log(`Hello, ${name}.`);
}
sayHello_1('wangding');

// 声明方式 2，函数表达式
const sayHello_2 = function(name) {
  log(`Hello, ${name}.`);
}
sayHello_2('wangding');

// 声明方式 3，箭头函数
const sayHello_3 = name => log(`Hello, ${name}.`);
sayHello_3('wangding');

// 声明方式 4，new 实例化
const sayHello_4 = new Function('name', 'console.log(`Hello, ${name}.`)');
sayHello_4('wangding');

// 声明方式 4 很少用，但揭示了函数是对象的本质
// 函数名是引用类型变量
log(typeof sayHello_1);
log(sayHello_1 instanceof Function);
log(sayHello_1 instanceof Object);

// 函数是对象，就有属性
log(sayHello_1.name);
log(sayHello_2.name);
log(sayHello_3.name);
log(sayHello_4.name);
log(sayHello_1.length);
// sayHello_1.caller
// sayHello_1.arguments

// 函数是对象，就有方法
log(sayHello_1.toString());
// sayHello_1.call()
// sayHello_1.apply()
// sayHello_1.bind()
