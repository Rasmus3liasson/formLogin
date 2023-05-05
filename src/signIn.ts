import { eyeIcon } from "./functions";
const logIn: HTMLButtonElement | null = document.querySelector("#log-in-btn");

interface LoginForm {
  username: string;
  password: string;
}

function accesSessionStorage() {
  const userName: HTMLInputElement | null =
    document.querySelector("#user-name");
  const password: HTMLInputElement | null = document.querySelector("#password");
  const loginBtn: HTMLInputElement | null = document.querySelector("#btn-tag");

  const loginObj: LoginForm = JSON.parse(
    sessionStorage.getItem("loginObj") || '{"username": "", "password": ""}'
  );

  if (loginObj !== null) {
  }

  if (
    userName?.value === loginObj.username &&
    password?.value === loginObj.password
  ) {
    userName?.classList.remove("input-error");
    password?.classList.remove("input-error");
    document.querySelector("#sign-in-text")?.removeAttribute("hidden");
    loginBtn?.setAttribute("href", "#");

    return true;
  } else {
    console.error("Inget med dessa kontouppgifter har skapats, status 401");
    userName?.classList.add("input-error");
    password?.classList.add("input-error");

    return false;
  }
}

eyeIcon();

logIn?.addEventListener("click", function () {
  accesSessionStorage();
});
