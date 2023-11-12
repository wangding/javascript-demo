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

log('circle instanceof Circle is', circle instanceof Circle);
log('circle instanceof Shape is', circle instanceof Shape);
log('circle instanceof Object is', circle instanceof Object);
