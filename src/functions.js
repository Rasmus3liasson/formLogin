const userName = document.querySelector("#user-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const mailConfirm = document.querySelector("#confirm-mail");
const telefon = document.querySelector("#telefon");
const passwordConfirm = document.querySelector("#confirm-password");

function checkUserName() {
  if (userName.value.length >= 5) {
    userName.classList.remove("input-error");
    return true;
  } else {
    userName.classList.add("input-error");
  }
}

function eyeIcon() {
  document.querySelector("#eye-icon").addEventListener("click", function () {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
}

function eyeIconConfirm() {
  document
    .querySelector("#eye-icon-confirm")
    .addEventListener("click", function () {
      if (passwordConfirm.type === "password") {
        passwordConfirm.type = "text";
      } else {
        passwordConfirm.type = "password";
      }
    });
}

function checkPassword() {
  const password = document.querySelector("#password");
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
function checkPhone() {
  const phonePattern = /^07(0|2|3|6|9)\d{7}$/g;

  if (telefon.value.match(phonePattern)) {
    return true;
  } else {
    telefon.classList.add("input-error");
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

export {
  eyeIcon,
  eyeIconConfirm,
  checkEmail,
  checkPassword,
  errorIndicator,
  checkUserName,
  checkPhone,
};