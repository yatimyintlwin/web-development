// exercise (1)

function changeValue() {
  let originalArray = [100, 200, 300, 400, 500];

  let changedArray = originalArray.map((n) => n + " Kyats");

  console.log(changedArray);
}
changeValue();

// exercise (2)

function changedArray() {
  let originalArray = [2, 4, 6, 8, 10];

  let changedArray = originalArray.map((n) => n * 3);

  console.log(changedArray);
}
changedArray();

// exercise (3)

function nums() {
  let nums = [20, 40, 33, 12, 46, 70, 80, 10];

  let lessThan30 = nums.filter((n) => n > 30);

  console.log(lessThan30);
}
nums();

// exercise (4)

function removeGreen() {
  let mix = [true, "green", 22, "tree", "green", false];

  let removeGreen = mix.filter((n) => n !== "green");

  console.log(removeGreen);
}
removeGreen();

// exercise (5)

function discountFormula() {
  let originalPrice = [1000, 1200, 2000, 2500, 3000, 4500];

  return originalPrice.map((n) => n - (n * 20) / 100);
}
console.log(discountFormula());

// exercise (6)

function choosePrices() {
  let discountPrices = discountFormula();

  let choosePrices = discountPrices.filter((n) => n <= 2000);

  console.log(choosePrices);
}
choosePrices();
