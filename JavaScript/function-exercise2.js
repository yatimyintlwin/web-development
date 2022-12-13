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
  return a === "green";
}
console.log(isGreen("red"));

function num(a) {
  return a > 40 && a <= 80;
}
console.log(num(90));

function calculate(a, b) {
  console.log(`total division of ${a} by ${b} is ${a / b}`);
}
calculate(30, 2);

function doReverse(a) {
  console.log(`${!a}`);
}
doReverse(10);

function doMagic(a) {
  console.log(`result is ${a + 5}`);
}
doMagic(2);

function isEven(a) {
  return a % 2 === 0;
}
console.log(isEven(10));

function color(a) {
  return a === "green" || a === "blue";
}
console.log(color("red"));
