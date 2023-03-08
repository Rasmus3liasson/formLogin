const form = document.querySelector("form");
const userName = document.querySelector("#user-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const mailConfirm = document.querySelector("#confirm-mail");

const telefon = document.querySelector("#telefon");
const btnTag = document.querySelector("#btn-tag");
const subBtn = document.querySelector("#submit-btn");

function eyeIcon() {
  document.querySelector("#eye-icon").addEventListener("click", function () {
    const password = document.querySelector("#password");
    if (password.getAttribute("type", "password")) {
      password.setAttribute("type", "text");
    }
  });
}

function eyeIconConfirm() {
  document
    .querySelector("#eye-icon-confirm")
    .addEventListener("click", function () {
      const passwordConfirm = document.querySelector("#confirm-password");
      if (passwordConfirm.getAttribute("type", "password")) {
        passwordConfirm.setAttribute("type", "text");
      }
    });
}

function checkPassword() {
  if (
    password.value.match(/[A-Z]+[a-z]+[0-9]+[$@#&!]/) &&
    password.value.length >= 8 &&
    password.value === passwordConfirm.value
  ) {
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
    return true;
  } else {
    mail.classList.add("input-error");
    mailConfirm.classList.add("input-error");
  }
}

function errorBorder(inputValue) {
  if (inputValue.value === "") {
    inputValue.classList.add("input-error");
  } else if (inputValue.value != "") {
    inputValue.classList.remove("input-error");
  }
}

function errorIndicator() {
  errorBorder(userName);
  errorBorder(firstName);
  errorBorder(lastName);
  errorBorder(mail);
  errorBorder(mailConfirm);
  errorBorder(password);
  errorBorder(passwordConfirm);
  errorBorder(telefon);
}

eyeIcon();
eyeIconConfirm();

subBtn.addEventListener("click", function () {
  errorIndicator();

  if (checkEmail() && checkPassword()) {
    console.log("klarad");
    btnTag.setAttribute("href", "signIn.html");
  } else {
    event.preventDefault();
  }
});
