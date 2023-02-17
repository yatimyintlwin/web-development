let person = { name: "Alice", age: 21 };
let personJson = JSON.stringify(person);
console.log(personJson);

let json = '{ "name": "Alice", "age": 21}';
let person2 = JSON.parse(json);
console.log(person2);
