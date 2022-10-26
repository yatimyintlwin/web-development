function welcome(name) {
  console.log(`Welcome, ${name}`);
}
welcome("Alex");

function multi(a, b, c) {
  return a * b * c;
}
console.log(multi(4, 5, 6));

function isOdd(a) {
  return a % 2 !== 0;
}
console.log(isOdd(13));

function isGreen(a) {
  return a == "green";
}
console.log(isGreen("red"));

function num(a) {
  return (a > 40 && a < 80) || a == 80;
}
console.log(num(60));

function calculate(a, b) {
  return a / b;
}
console.log(calculate(50, 5));

let a = 5;
console.log(a !== 5);

function doMagic(a) {
  return a + 5;
}
console.log(doMagic(2));

function isEven(a) {
  return a % 2 == 0;
}
console.log(isEven(10));

function color(a) {
  return a == "green" || a == "blue";
}
console.log(color("red"));
