const form = document.querySelector("form");
const userName = document.querySelector("#user-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const mailConfirm = document.querySelector("#confirm-mail");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const telefon = document.querySelector("#telefon");
const btnTag = document.querySelector("#btn-tag");

let subBtn = document.querySelector("#submit-btn");

function checkPassword() {
  if (
    password.value.match(/[A-Z]+[a-z]+[0-9]+[$@#&!]/) &&
    password.value.length >= 8 &&
    password.value === passwordConfirm.value
  ) {
    console.log(password.value);
    return true;
  }
}

function checkEmail() {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mail.value.match(emailPattern) && mail.value === mailConfirm.value) {
    console.log(mail.value);
    return true;
  }
}

subBtn.addEventListener("click", function () {
  event.preventDefault();
  if (checkEmail() && checkPassword() === true) {
    console.log("klarad");
    btnTag.setAttribute("href", "signIn.html");
  }
});
