class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running...`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name}: Woof.. Woof..`);
  }
}

let milo = new Dog("Milo");
milo.bark();
milo.run();

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name}: Meow.. Meow..`);
  }
}

let cat = new Cat("Shwe War", "Yellow");
cat.meow();
