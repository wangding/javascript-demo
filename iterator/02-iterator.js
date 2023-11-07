#!/usr/bin/env node

const myClass = {
  name: '信计20级',
  students: [
    '张三',
    '李四',
    '王五',
    '赵六',
  ],
  [Symbol.iterator]() {
    let index = 0, _this = this;
    return {
      next() {
        return (index < _this.students.length)
          ? {value: _this.students[index++], done: false}
          : {value: undefined, done: true};
      }
    }
  }
}

for(let c of myClass) console.log(c);
