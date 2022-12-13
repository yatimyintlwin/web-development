let greet = function () {
  console.log("Hello, World");
};
greet();

(function () {
  console.log("Hello, World");
})();

function twice(num, fun) {
  let result = fun(num);
  return result * 2;
}

let num1 = twice(5, function (x) {
  return x + 1;
});
console.log(num1);

let num2 = twice(5, function (x) {
  return x * x;
});
console.log(num2);

let add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

let one = (a, b) => a + b;
console.log(one(1, 5));

let two = (n) => n * 2;
console.log(two(6));

let hello = () => "Hello, World";
console.log(hello());

let hello2 = (_) => "Hello, World";
console.log(hello2());

let twice2 = (n, f) => f(n) * 2;

let num3 = twice2(6, function (x) {
  return x * x;
});

console.log(num3);
