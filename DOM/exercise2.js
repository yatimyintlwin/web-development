let fruits = ["Apple", "Watermelon", "Banana", "Melon", "Papaya", "Mango"];

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
  document.getElementById("fruits").innerHTML += `<li>${fruits[index]}</li>`;
}

fruits.forEach((fruit) => {
  document.getElementById("fruits").innerHTML += `<li>${fruit}</li>`;
});
