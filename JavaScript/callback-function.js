// exercise1

function calculate(a, b, fun) {
  console.log(`result is ${fun(a, b)}`);
}

calculate(5, 6, function (a, b) {
  return a + b;
});

calculate(10, 6, function (a, b) {
  return a - b;
});

calculate(5, 6, function (a, b) {
  return a * b;
});

calculate(50, 4, function (a, b) {
  return a / b;
});

// exercise2

function order(a, fun) {
  return fun(a);
}

order("T-shirt", function (a) {
  console.log("Your order is: " + a);
});

order("Coca Code", function (a) {
  console.log("Your order is: " + a);
});

// exercise3

function square(num, fun) {
  console.log(fun(num));
}

square(5, function (a) {
  return a * a;
});

square(7, function (a) {
  return a * a;
});
