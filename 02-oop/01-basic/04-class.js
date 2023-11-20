#!/usr/bin/env node

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
    let r1 = new Rectangle(20, 10),
        r2 = new Rectangle(0.2, 0.1);

    console.log(`r1(w=20, h=10), area=${r1.area}, perimeter=${r1.perimeter}`);
    console.log(`r2(w=0.2, h=0.1), area=${r2.area}, perimeter=${r2.perimeter}`);
  }
}

App.main();
