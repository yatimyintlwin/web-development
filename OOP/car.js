class Car {
  static PI = 3.14;
  #color = "red";
  wheels = 4;
  drive() {
    console.log(`This ${this.#color} car is driving`);
  }
}

let toyota = new Car();
console.log(toyota.color);
toyota.drive();
console.log(toyota.wheels);

let car2 = new Car();
console.log(car2.wheels);
console.log(car2.color);
car2.drive();

let car3 = new Car();
car3.drive();
console.log(car3.PI);
console.log(car3.wheels);
console.log(car3.color);

console.log(Car.PI);
