function add1000() {
  let result = 0;

  for (let i = 1; i <= 1000; i++) {
    result += i;
  }

  return result;
}

async function add1000later() {
  let result = await add1000();
  return result;
}

console.log("some processes");
add1000later().then((result) => console.log(result));
console.log("more processes");
