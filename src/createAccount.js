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

  if (
    checkEmail() &&
    checkPassword() &&
    checkPhone() === true &&
    checkUserName() != false
  ) {
    const userNameAccepted = checkUserName();
    const passwordAccepted = accesPassword();

    let loginObj = {
      username: userNameAccepted,
      password: passwordAccepted,
    };

    let objStringify = JSON.stringify(loginObj);
    sessionStorage.setItem("loginObj", objStringify);
    btnTag.setAttribute("href", "index.html");
  } else {
    event.preventDefault();
  }
});
