function getPeople() {
  return [
    { name: "Alex" },
    { name: "Bob", gender: "M" },
    { name: "Tom", gender: "m" },
    { name: "Mary", gender: "F" },
  ];
}

// 1
function fillGender1() {
  let result = getPeople().map(function (person) {
    if (person.gender) {
      if (person.gender === "m" || person.gender === "M") {
        person.gender = "Male";
      }

      if (person.gender === "f" || person.gender === "F") {
        person.gender = "Female";
      }
    } else {
      person.gender = "Unknown";
    }
    return person;
  });
  console.log(result);
}

fillGender1();

// 2
function fillGender2() {
  let result = getPeople().map(function (person) {
    if (person.gender === "m" || person.gender === "M") {
      person.gender = "Male";
    } else if (person.gender === "f" || person.gender === "F") {
      person.gender = "Female";
    } else {
      person.gender = "Unknown";
    }

    return person;
  });
  console.log(result);
}

fillGender2();

// 3
function fillGender3() {
  let result = getPeople().map(function (person) {
    switch (person.gender) {
      case "m":
      case "M":
        person.gender = "Male";
        break;
      case "f":
      case "F":
        person.gender = "Female";
        break;
      default:
        person.gender = "Unknown";
    }

    return person;
  });
  console.log(result);
}

fillGender3();
