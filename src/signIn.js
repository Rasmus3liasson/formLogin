const logIn = document.querySelector("#log-in-btn");
const createAccount = document.querySelector("#create-account-btn");
const userName = document.querySelector("#user-name");

function eyeIcon() {
  document.querySelector("#eye-icon").addEventListener("click", function () {
    const password = document.querySelector("#password");
    if (password.getAttribute("type", "password")) {
      password.setAttribute("type", "text");
    }
  });
}

function checkUserName() {
  if (userName.value.length >= 5) {
    userName.classList.remove("input-error");
    return true;
  } else {
    userName.classList.add("input-error");
  }
}

function checkPassword() {
  if (
    password.value.match(/[A-Z]+[a-z]+[0-9]+[$@#&!]/) &&
    password.value.length >= 8
  ) {
    password.classList.remove("input-error");
    return true;
  } else {
    password.classList.add("input-error");
  }
}

eyeIcon();

logIn.addEventListener("click", function () {
  checkUserName();
  checkPassword();
});
