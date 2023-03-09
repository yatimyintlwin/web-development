let text = document.getElementById("hello");
text.style.color = "red";
text.style.textAlign = "center";
console.log(text);

let text2 = document.getElementsByClassName("cat")[0].innerText;
console.log(text2);

let text3 = document.getElementsByClassName("cat")[1].innerText;
console.log(text3);

document.getElementById("dog").innerText = "My dog";

document.getElementsByClassName("dog2")[0].innerText = "My dog 2";
document.getElementsByClassName("dog2")[1].innerText = "My dog 3";

document.getElementById("hello").innerText = "hello world";
text.innerText = "blah blah";

let fruits = document.getElementById("fruit").innerHTML;
console.log(fruits);
