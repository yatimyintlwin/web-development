// exercise1

let username = function (name, age) {
  console.log(`Your username is ${name} and your age is ${age}. `);
};
username("Alex", 30);

// exercise2

let squareNumber = function (a) {
  console.log(a * a);
};
squareNumber(3);

// exercise3

let celsiusToFahrenheit = function (celsius) {
  console.log((celsius * 9) / 5 + 32);
};
celsiusToFahrenheit(3);

// exercise4

let rectangleArea = function (width, height) {
  console.log(`The area of rectangle is ${width * height}`);
};
rectangleArea(10, 20);

// exercise5 (1)

let greet = function (name) {
  console.log(`Welcome, ${name}`);
};
greet("Alex");

// (2)

let multipleNumber = function (a, b, c) {
  console.log(a * b * c);
};
multipleNumber(3, 4, 5);

// (3)

let isOdd = function (a) {
  console.log(a % 2 !== 0);
};
isOdd(4);

// (4)

let isGreen = function (a) {
  console.log(a === "green");
};
isGreen("green");

// (5)

let num = function (a) {
  console.log(a > 40 && a <= 80);
};
num(30);

// (6)

let calculate = function (a, b) {
  console.log(`total division of ${a} by ${b} is ${a / b}`);
};
calculate(50, 5);

// (7)

let doReverse = function (a) {
  console.log(!a);
};
doReverse(6);

// (8)

let doMagic = function (a) {
  console.log(`result is ${a + 5}`);
};
doMagic(2);

// (9)

let isEven = function (a) {
  console.log(a % 2 === 0);
};
isEven(6);

// (10)

let color = function (a) {
  console.log(a === "green" || a === "blue");
};
color("red");
