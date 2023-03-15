// document.getElementById("username").value = "Hla Hla";

function getUserInfo() {
  let usernameElement = document.getElementById("username");
  let emailElement = document.getElementById("email");
  let phoneNumberElement = document.getElementById("phonenumber");

  document.getElementById(
    "checkinfo"
  ).innerHTML = `<p>${usernameElement.value}</p> <p>${emailElement.value}</p> <p>${phoneNumberElement.value}</p>`;

  //   console.log(usernameElement.value);
  //   console.log(emailElement.value);
  //   console.log(phoneNumberElement.value);
}
