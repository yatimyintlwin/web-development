class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.model} car has started`);
  }
}

let car1 = new Car("Japan", "Toyota", "xxx");
car1.start();

let car2 = new Car("America", "Marcity", "xxx");
car2.start();
