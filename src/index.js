import {
  eyeIcon,
  eyeIconConfirm,
  checkEmail,
  checkPassword,
  errorIndicator,
  checkPhone,
  checkUserName,
  accesPassword,
} from "./functions.js";

const btnTag = document.querySelector("#btn-tag");
const subBtn = document.querySelector("#submit-btn");

eyeIcon();
eyeIconConfirm();

subBtn.addEventListener("click", function () {
  errorIndicator();
  const userNameAccepted = checkUserName();
  const passwordAccepted = accesPassword();

  let loginObj = {
    username: userNameAccepted,
    password: passwordAccepted,
  };

  /*  let objStringify = JSON.stringify(loginObj);
  sessionStorage.setItem("loginObj", objStringify); */

  if (checkEmail() && checkPassword() && checkPhone()) {
    event.preventDefault();

    btnTag.setAttribute("href", "signIn.html");
  } else {
    event.preventDefault();
  }
});
