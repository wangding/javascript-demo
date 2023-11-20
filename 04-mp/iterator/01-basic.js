#!/usr/bin/env node

const log = console.log,
      dir = console.dir;
const courses = ['HTML', 'CSS', 'JavaScript'];

for(let c of courses) log(c);

const it = courses[Symbol.iterator]();
log(it.next());   // { value: 'HTML', done: false }
log(it.next());   // { value: 'CSS', done: false }
log(it.next());   // { value: 'JavaScript', done: false }
log(it.next());   // { value: undefined, done: true }

dir(it, {showHidden:true, depth:0});
dir(it.__proto__, {showHidden:true, depth:0});
log({}.toString.call(it));
