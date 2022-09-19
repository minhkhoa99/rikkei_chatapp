/** @format */
import { renderErrorMessage } from "../view/index";
import { createNewUser, signUser, resetUser } from "../model/index";

// import { createNewUser, loginUser } from "../model/index";
export let validateLoginInfo = (
  email,
  password,
  firstName,
  lastName,
  emailAddress,
  passwordAddress,
  confirmPassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erros_email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("erros_email", "Invalid email");
  } else {
    renderErrorMessage("erros_email", "");
  }

  if (!password) {
    renderErrorMessage("erros_password", "Please enter your password");
  } else {
    renderErrorMessage("erros_password", "");
  }
  if (!firstName) {
    renderErrorMessage("");
  }
  if (email && password) {
    signUser(email, password);
  }
};

// regex, regular expression
// email regex

export let validateregisInfo = (
  firstName,
  lastName,
  emailAddress,
  passwordAddress,
  confirmPassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstName) {
    renderErrorMessage("err_firstName", "Please enter your first name");
  } else {
    renderErrorMessage("err_firstName", "");
  }

  if (!lastName) {
    renderErrorMessage("err_lastName", "Please enter your last name");
  } else {
    renderErrorMessage("err_lastName", "");
  }

  if (!emailAddress) {
    renderErrorMessage("err_email", "Please enter your email");
  } else if (!emailRegex.test(emailAddress)) {
    renderErrorMessage("err_email", "Invalid email");
  } else {
    renderErrorMessage("err_email", "");
  }

  if (!passwordAddress) {
    renderErrorMessage("err_password", "Please enter your password");
  } else {
    renderErrorMessage("err_password", "");
  }

  if (!confirmPassword) {
    renderErrorMessage("err_confirm", "Please enter your password");
  } else if (confirmPassword != passwordAddress) {
    renderErrorMessage("err_confirm", "password must be the same");
  } else if (confirmPassword == passwordAddress) {
    renderErrorMessage("err_confirm", "");
  }
  if (
    firstName &&
    lastName &&
    emailAddress &&
    passwordAddress &&
    confirmPassword &&
    passwordAddress === confirmPassword
  ) {
    createNewUser(firstName, lastName, emailAddress, passwordAddress);
  }
};

export let validateresetPasswordInfo = (newemail) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!newemail) {
    renderErrorMessage("erro_email", "Please enter your email");
  } else if (!emailRegex.test(newemail)) {
    renderErrorMessage("erro_email", "Invalid email");
  } else {
    renderErrorMessage("erro_email", "");
  }
  // if (newemail) {
  //   resetUser(newemail);
  // }
};
