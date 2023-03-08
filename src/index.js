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
  } else {
    password.classList.add("input-error");
    passwordConfirm.classList.add("input-error");
  }
}

function checkEmail() {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mail.value.match(emailPattern) && mail.value === mailConfirm.value) {
    console.log(mail.value);
    return true;
  } else {
    mail.classList.add("input-error");
    mailConfirm.classList.add("input-error");
  }
}

function showBorder() {
  if (userName.value === "") {
    userName.classList.add("input-error");
  } else if (userName.value != "") {
    userName.classList.remove("input-error");
  }
  if (firstName.value === "") {
    firstName.classList.add("input-error");
  } else if (firstName.value != "") {
    firstName.classList.remove("input-error");
  }
  if (lastName.value === "") {
    lastName.classList.add("input-error");
  } else if (lastName.value != "") {
    lastName.classList.remove("input-error");
  }
  if (mail.value === "") {
    mail.classList.add("input-error");
  } else if (mail.value != "") {
    mail.classList.remove("input-error");
  }
  if (mailConfirm.value === "") {
    mailConfirm.classList.add("input-error");
  } else if (mailConfirm.value != "") {
    mailConfirm.classList.remove("input-error");
  }
  if (password.value === "") {
    password.classList.add("input-error");
  } else if (password.value != "") {
    password.classList.remove("input-error");
  }
  if (passwordConfirm.value === "") {
    passwordConfirm.classList.add("input-error");
  } else if (passwordConfirm.value != "") {
    passwordConfirm.classList.remove("input-error");
  }
  if (telefon.value === "") {
    telefon.classList.add("input-error");
  } else if (telefon.value != "") {
    telefon.classList.remove("input-error");
  }
}

subBtn.addEventListener("click", function () {
  showBorder();
  event.preventDefault();
  if (checkEmail() && checkPassword() === true) {
    console.log("klarad");
    btnTag.setAttribute("href", "signIn.html");
  }
});
