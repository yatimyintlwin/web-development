class Dog {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

let dog1 = new Dog("Bobby");
dog1.run();

let dog2 = new Dog("Rubby");
dog2.run();
