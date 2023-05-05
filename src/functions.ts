const userName = document.querySelector("#user-name") as HTMLInputElement;
const firstName = document.querySelector("#first-name") as HTMLInputElement;
const lastName = document.querySelector("#last-name") as HTMLInputElement;
const mail = document.querySelector("#mail") as HTMLInputElement;
const mailConfirm = document.querySelector("#confirm-mail") as HTMLInputElement;
const telefon = document.querySelector("#telefon") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;
const passwordLabel = document.querySelector(
  "#password-label"
) as HTMLInputElement;
const passwordConfirm = document.querySelector(
  "#confirm-password"
) as HTMLInputElement;
const passwordConfirmLabel = document.querySelector(
  "#password-confirm-label"
) as HTMLInputElement;

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
  const passwordIcon = document.querySelector("#eye-icon") as HTMLInputElement;

  passwordIcon.addEventListener("click", function () {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
}

function eyeIconConfirm() {
  const passwordIcon = document.querySelector(
    "#eye-icon-confirm"
  ) as HTMLInputElement;

  passwordIcon.addEventListener("click", function () {
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

function errorBorder(inputValue: HTMLInputElement) {
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
  checkPhone();
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
