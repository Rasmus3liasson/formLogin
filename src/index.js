import {
  eyeIcon,
  eyeIconConfirm,
  checkEmail,
  checkPassword,
  errorIndicator,
  checkPhone,
} from "./functions.js";

const btnTag = document.querySelector("#btn-tag");
const subBtn = document.querySelector("#submit-btn");

eyeIcon();
eyeIconConfirm();

subBtn.addEventListener("click", function () {
  errorIndicator();

  if (checkEmail() && checkPassword() && checkPhone()) {
    event.preventDefault();
    console.log("klarad");
    btnTag.setAttribute("href", "signIn.html");
  } else {
    event.preventDefault();
  }
});
