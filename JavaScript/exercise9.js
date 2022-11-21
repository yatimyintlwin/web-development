let fruits = ["Apple", "Orange"];
console.log(fruits.length);

fruits[2] = "Mango";
console.log(fruits.length);

console.log(fruits[fruits.length - 1]);

let mix = [
  [123, 456, 789],
  ["Ant", "Cat", "Dog"],
];

let nums = mix[0];
console.log(nums);

let animals = mix[1];
console.log(animals);

let x = mix[0][1];
console.log(x);

let rambo = mix[1][2];
console.log(rambo);

let animals2 = ["Dog", "Cat", "Bird"];

animals2.push("Cow");
console.log(animals2);

animals2.pop();
console.log(animals2);

animals2.unshift("Ant");
console.log(animals2);

animals2.shift();
console.log(animals2);

let fruits2 = ["Apple", "Orange", "Mango", "Banana"];

console.log(fruits2.indexOf("Mango"));

console.log(fruits2.splice(3, 1));
console.log(fruits2);

let fruits3 = ["Apple", "Orange", "Mango"];

console.log(fruits3.join(", "));
