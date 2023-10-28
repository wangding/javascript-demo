#!/usr/bin/env node

const {
  log,
  deepLog,
  printPrototypeChain,
} = require('./00-lib');

/* 设置对象的原型 */
function Shape() {}
Shape.prototype.area = () => log('area');
Shape.prototype.perimeter = () => log('perimeter');

function Circle() {}
Circle.prototype.show = () => log('show');

const circle = new Circle();

printPrototypeChain(circle, 'circle');

Object.setPrototypeOf(Circle.prototype, Shape.prototype);

printPrototypeChain(circle, 'circle');
deepLog(circle);

circle.show();
circle.area();
circle.perimeter();
