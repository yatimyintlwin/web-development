function add1000() {
  let result = 0;

  for (let i = 1; i <= 1000; i++) {
    result += i;
  }

  return result;
}

function add1000later() {
  return new Promise((resolve, reject) => {
    let result = add1000();
    if (result) resolve(result);
    else reject();
  });
}

console.log("some processes");
add1000later()
  .then((result) => result + 1000)
  .then((result) => console.log(result))
  .catch(() => console.log(result));
console.log("more processes");
