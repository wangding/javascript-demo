#!/usr/bin/env node

// 数组中放引用类型和原始类型是不一样的

// 原始类型数组，不修改数组元素
const arr1 = [2, 3, 4, 6];

const res1 = arr1.map(item => item += 10);
console.table(arr1);
console.table(res1);

// 引用类型数组，会修改数组元素
const arr2 = [{
  name: 'zhangsan',
  salary: 1000,
}, {
  name: 'lisi',
  salary: 2000,
}, {
  name: 'wangwu',
  salary: 3000,
}];

arr2.map(item => item.salary = (item.salary*1.1).toFixed(2));
console.table(arr2);
