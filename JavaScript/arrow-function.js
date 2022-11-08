// exercise 1

let greet = (name) => console.log(`Welcome, ${name}`);
greet("Alex");

// exercise 2

let multi = (a, b, c) => a * b * c;
console.log(multi(4, 5, 6));

// exercise 3

let isOdd = (a) => a % 2 !== 0;
console.log(isOdd(13));

// exercise 4

let isGreen = (a) => a === "green";
console.log(isGreen("red"));

// exercise 5

let num = (a) => a > 40 && a <= 80;
console.log(num(50));

// exercise 6

let calculate = (a, b) =>
  console.log(`total division of ${a} by ${b} is ${a / b}`);
calculate(50, 5);

// exercise 7

let doReverse = (a) => {
  return !a;
};
console.log(doReverse(10));

// exercise 8

let doMagic = (a) => console.log(`result is ${a + 5}`);
doMagic(2);

// exercise 9

let isEven = (a) => a % 2 === 0;
console.log(isEven(10));

// exercise 10

let color = (a) => a === "green" || a === "blue";
console.log(color("red"));
