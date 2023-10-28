#!/usr/bin/env node

const {
  log,
  dir,
} = require('./00-lib');

/* 优化构造函数 */
function Rectangle() {
  this.area = () => log('Rectangle area');
  this.perimeter = () => log('Rectangle perimeter');
}

const r1 = new Rectangle();
const r2 = new Rectangle();

r1.area();
r2.perimeter();
dir(r1);
dir(r2);

function Circle() {}
Circle.prototype.area = () => log('Circle area');
Circle.prototype.perimeter = () => log('Circle perimeter');

const c1 = new Circle();
const c2 = new Circle();

c1.area();
c2.perimeter();
dir(c1);
dir(c2);

dir(Object.getPrototypeOf(c1));

function Triangle() {}
Triangle.prototype = {
  //constructor: Triangle,
  area() { log('Triangle area'); },
  perimeter() { log('Triangle perimeter'); }
}
const t1 = new Triangle();
const t2 = new Triangle();

t1.area();
t2.perimeter();
dir(t1);
dir(t2);

dir(Object.getPrototypeOf(t1));
