#!/usr/bin/env node

const log = console.log;

/* instanceof 检查原型链 */
function Shape() {}
Shape.prototype.area = () => log('area');
Shape.prototype.perimeter = () => log('perimeter');

function Circle() {}
Circle.prototype.show = () => log('show');

Object.setPrototypeOf(Circle.prototype, Shape.prototype);

const circle = new Circle();

const asserts = [
  'circle instanceof Circle',
  'circle instanceof Shape',
  'circle instanceof Object',
];

const verify = assert => log(`${assert} is`, eval(assert));

asserts.forEach(verify);
