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
