#!/usr/bin/env node

const log = console.log;
const type = obj => Object.prototype.toString.call(obj);

log(type(/\d/));
log(type([]));
log(type(new URLSearchParams()));

function Dog(name) { this.name = name; }
Dog.prototype[Symbol.toStringTag] = 'Dog';
const dog1 = new Dog('Gabby');

log(type(dog1));

class Egg { [Symbol.toStringTag] = 'Egg'; }
const egg1 = new Egg();
log(type(egg1));
