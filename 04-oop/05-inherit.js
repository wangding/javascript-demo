#!/usr/bin/env node

class Shape {
  get area() {}
  get perimeter() {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.#r = radius;
  }

  get area() {
    return (Math.PI * this.#r ** 2).toFixed(2);
  }

  get perimeter() {
    return (2 * Math.PI * this.#r).toFixed(2);
  }

  #r = 0;
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.#b = base;
    this.#h = height;
  }

  get area() {
    return (this.#b * this.#h / 2).toFixed(2);
  }

  static perimeter(s1, s2, s3) {
    return (s1+s2+s3);
  }

  #b = 0;
  #h = 0;
}

class Rectangle {
  constructor(width, height) {
    this.#w = Number(width);
    this.#h = Number(height);
  }

  get area() {
    return (this.#w * this.#h).toFixed(2);
  }

  get perimeter() {
    return (2 * this.#w + 2 * this.#h).toFixed(2);
  }

  #w = 0;
  #h = 0;
}

class App {
  static main() {
    let r = new Rectangle(20, 10),
        c = new Circle(10),
        t = new Triangle(10, 5);

    console.log(`r(w=20, h=10), area=${r.area}, perimeter=${r.perimeter}`);
    console.log(`r(r=10), area=${c.area}, perimeter=${c.perimeter}`);
    console.log(`t(b=10, h=5, s=[3,4,5]), area=${t.area}, perimeter=${Triangle.perimeter(3,4,5)}`);
  }
}

App.main();
