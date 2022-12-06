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

function findPlanetIndex(a) {
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
  return planets.indexOf(a);
}
console.log(findPlanetIndex("Earth"));
console.log(findPlanetIndex("Neptune"));

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

function convert(array) {
  console.log(array.join(" * "));
}
convert([1, 2, 3]);

convert(["apple", "orange"]);

// exercise (9)

function myReplace(a, b) {
  let fruits = ["apples", "oranges", "mango", "carrots", "onions", "brocoli"];
  let oldValue = fruits.indexOf(a);
  fruits[oldValue] = b;
  console.log(fruits);
}
myReplace("oranges", "banana");

// exercise (10)

function findPlanetValue(a) {
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
  return planets[a];
}
console.log(findPlanetValue(4));

console.log(findPlanetValue(6));
