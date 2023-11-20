#!/usr/bin/env node

const {
  log,
  printPrototypeChain,
} = require('./00-lib');

/* instanceof 检查原型链 */
function Shape() {}
Shape.prototype.area = () => log('area');
Shape.prototype.perimeter = () => log('perimeter');

function Circle() {}
Circle.prototype.show = () => log('show');

Object.setPrototypeOf(Circle.prototype, Shape.prototype);

const circle = new Circle();

printPrototypeChain(circle, 'circle');

const asserts = [
  'circle instanceof Circle',
  'circle instanceof Shape',
  'circle instanceof Object',
];

function trueOrFalse(assert) {
  log(`${assert} is:`, eval(assert));
}

asserts.forEach(trueOrFalse);
