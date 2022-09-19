/** @format */
import { loginPage } from "../pages/loginPage/index";
import { createAccount } from "../pages/registerPage/index";
import { resetPass } from "../pages/resetPasswordPage/index";
import { chatPage } from "../pages/chatPage/index";

import { validateLoginInfo } from "../controller/index";
import { validateregisInfo } from "../controller/index";
import { validateresetPasswordInfo } from "../controller/index";
export let setActivesScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("chat_login");
      const registerScreen = document.getElementById("create_question");
      const resetPassScreen = document.getElementById("forgotpass");
      if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          validateLoginInfo(email, password);

          //controller lam nhiem vu validate thong tin
          //tao ham validateLoginInfo nhan vao e mail va password trong controller
          //export ham validare
          //import validate trong view
          //Trong screen login goi validare voi e mail va pass lay tu form
          //trong controller, logic cua validate se la kiem tra xem co phai mail hop le ko
          //co bo trong truong nao ko
          //tao mot ham setMessage o view va export sang controller de in ra loi
          // tu nhung truong hop va validate do
          // lam giong cac buoc tren voi resetpass va create
        });
        registerScreen.onclick = () => {
          setActivesScreen("createAccount");
        };
        resetPassScreen.onclick = () => {
          setActivesScreen("resetPass");
        };
      }
      break;
    case "createAccount":
      if (app) {
        app.innerHTML = createAccount;
      }
      const registerform = document.getElementById("chat_create_account");
      if (registerform) {
        registerform.addEventListener("submit", (event) => {
          event.preventDefault();

          const firstName = registerform.firstName.value;
          const lastName = registerform.lastName.value;
          const emailAddress = registerform.emailAdress.value;
          const passwordAddress = registerform.passwordAddress.value;
          const confirmPassword = registerform.confirmPassword.value;
          validateregisInfo(
            firstName,
            lastName,
            emailAddress,
            passwordAddress,
            confirmPassword
          );
        });
      }
      break;
    case "resetPass":
      if (app) {
        app.innerHTML = resetPass;
        const resetEmail = document.getElementById("chat_reset");
        const createMail = resetEmail.email.value;
        validateresetPasswordInfo(createMail);
      }

      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;

    default:
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let successMessage = (id, text) => {
  const successMessage = document.getElementById(id);
  if (successMessage) {
    successMessage.innerText = text;
  }
};
