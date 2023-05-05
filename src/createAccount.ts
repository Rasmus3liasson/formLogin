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

const btnTag = document.querySelector("#btn-tag") as HTMLLinkElement;
const subBtn = document.querySelector("#submit-btn") as HTMLButtonElement;

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

    fetch("/api/hej", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginObj),
    });
    btnTag.setAttribute("href", "index.html");

    /*   let objStringify = JSON.stringify(loginObj);
    sessionStorage.setItem("loginObj", objStringify);
    btnTag.setAttribute("href", "index.html");
  } else {
    event?.preventDefault();
  } */
  }
});

/* fetch("/api/highscoredata", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(highscoreData),
}); */
