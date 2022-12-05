// exercise (1)

function mix() {
  let add = ["Max", 100.5, true, "Yello Hat", false];
  console.log(add[1], add[3]);
}
mix();

// exercise (2)

function fruits() {
  let add = ["Orange", "Pineapple", "Grape", "Watermelon"];

  // 1
  add[0] = "Banana";
  add[1] = "Blueberry";
  add[3] = "Coconut";

  // 2
  console.log(add.length);

  // 3
  console.log(add);

  // 4
  console.log(add[add.length - 1]);
}
fruits();

// exercise (3)

function ballonNum() {
  let data = ["Ballon", true];
  data[4] = 55;
  console.log(data);
}
ballonNum();

// exercise (4)

function animals() {
  let mix = [
    [100, 300, 45, 89],
    ["dog", "cat", "horse"],
    [true, "Candle", 23],
  ];

  // 1
  console.log(mix[0][1], mix[1][0], mix[2][2]);

  // 2
  console.log(mix.length);

  // 3
  mix[0][2] = 600;
  mix[2][1] = "Incense";
  console.log(mix);
}
animals();

// exercise (5)

function color() {
  let colors = ["Blue", "Yellow"];

  // 1
  colors.push("Red", "Pink");
  console.log(colors);

  // 2
  colors.pop();
  console.log(colors);

  // 3
  colors.unshift("Black", "Puple");
  console.log(colors);

  // 4
  colors.shift();
  console.log(colors);
}
color();

// exercise (6)

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];
function findPlanet(a) {
  return a;
}
console.log(findPlanet(planets.indexOf("Earth")));

console.log(findPlanet(planets.indexOf("Neptune")));

// exercise (7)

function planet() {
  let planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];
  console.log(planets.splice(3, 3));
}
planet();

// exercise (8)

function num() {
  let nums = [1, 2, 3];
  console.log(nums.join(" * "));
}
num();

function fruit() {
  let fruits = ["apple", "orange"];
  console.log(fruits.join(" * "));
}
fruit();

// exercise (9)

// function myReplace() {
//   let fruits = ["apples", "oranges", "mango", "carrots", "onions", "brocoli"];
//   console.log();
// }

// exercise (10)

function findPlanetValue(a) {
  return a;
}
console.log(findPlanetValue(planets[4]));

console.log(findPlanetValue(planets[6]));
