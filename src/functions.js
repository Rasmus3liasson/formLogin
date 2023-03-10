const userName = document.querySelector("#user-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const mailConfirm = document.querySelector("#confirm-mail");
const telefon = document.querySelector("#telefon");
const password = document.querySelector("#password");
const passwordLabel = document.querySelector("#password-label");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordConfirmLabel = document.querySelector("#password-confirm-label");

function checkUserName() {
  if (userName.value.length >= 5) {
    userName.classList.remove("input-error");
    return userName.value;
  } else {
    userName.classList.add("input-error");
    return false;
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

function checkPassword() {
  if (
    password.value.match(/[A-Z]+[a-z]+[0-9]+[$@#&!?=%€]/) &&
    password.value.length >= 8 &&
    password.value === passwordConfirm.value
  ) {
    return true;
  } else if (password.value != passwordConfirm.value) {
    passwordConfirm.classList.add("input-error");
    passwordConfirmLabel.innerHTML = "Stämmer inte";
  } else if (password.value.match(/[A-Z]+[a-z]+[0-9]+[$@#&!?=%€]/)) {
    passwordLabel.innerHTML = "Lösenord";
  } else {
    password.classList.add("input-error");
    passwordConfirm.classList.add("input-error");
    passwordLabel.innerHTML = "Inte starkt nog";
  }
}

function accesPassword() {
  return password.value;
}

function checkPhone() {
  const phonePattern = /^(?:\+46|0)(7[0236])[-]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/;

  if (telefon.value.match(phonePattern)) {
    telefon.classList.remove("input-error");
    return true;
  } else {
    telefon.classList.add("input-error");
    return false;
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
  checkPhone(telefon.value);
}

export {
  eyeIcon,
  eyeIconConfirm,
  checkEmail,
  checkPassword,
  errorIndicator,
  checkUserName,
  accesPassword,
  checkPhone,
};
