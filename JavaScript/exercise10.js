let nums = [1, 2, 3, 4, 5];

let result = nums.map((n) => n + " Kyats");
console.log(result);

let odd = nums.filter((n) => n !== 2);
console.log(odd);

let result2 = nums.map((n) => n + 2).filter((n) => !(n % 2));
console.log(result2);

let result3 = nums.reduce(function (a, n) {
  return a / n;
});
console.log(result3);

let nums2 = [1, 2, 3];

let alphas = ["a", "b", "c"];

let results = [nums2, alphas];
console.log(results);

let results2 = [...nums2, ...alphas];
console.log(results2);

let four = [...nums2, 4];
console.log(four);

let zero = [0, ...nums2];
console.log(zero);

function add(a, b) {
  return a + b;
}

let nums3 = [123, 456];
console.log(add(nums3[0], nums3[1]));

console.log(add(...nums3));

let a = nums3[0];
console.log(a);

let b = nums3[1];
console.log(b);

let [c, d] = nums3;
console.log(c);
console.log(d);

function add2([a, b]) {
  return a + b;
}

console.log(add2(nums3));
