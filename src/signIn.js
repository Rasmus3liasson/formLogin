import { eyeIcon } from "./functions.js";
const logIn = document.querySelector("#log-in-btn");

function accesSessionStorage() {
  const userName = document.querySelector("#user-name");
  const password = document.querySelector("#password");

  const loginObj = JSON.parse(sessionStorage.getItem("loginObj"));

  if (
    userName.value === loginObj.username &&
    password.value === loginObj.password
  ) {
    userName.classList.remove("input-error");
    password.classList.remove("input-error");
    document.querySelector("#sign-in-text").removeAttribute("hidden");

    return true;
  } else {
    console.error("Inget med dessa kontouppgifter har skapats, status 401");
    userName.classList.add("input-error");
    password.classList.add("input-error");

    return false;
  }
}

eyeIcon();

logIn.addEventListener("click", function () {
  accesSessionStorage();
});
