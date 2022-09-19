/** @format */

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfiles,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { renderErrorMessage, setActivesScreen } from "../view/index";
import { successMessage } from "../view/index";
export let createNewUser = (
  firstName,
  lastName,
  emailAddress,
  passwordAddress
) => {
  const auth = getAuth();
  let result = createUserWithEmailAndPassword(
    auth,
    emailAddress,
    passwordAddress
  )
    .then((userCredential) => {
      console.log(userCredential);
      successMessage("server_success_message", "Signup successfully");
    })
    .catch((err) => {
      const errCode = err.code;
      const errorMessage = err.message;
      console.log(errCode, errorMessage);
      renderErrorMessage("server_err_message", err.message);
    });

  var user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: `${firstName}
      ${lastName}`,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(function () {})
    .catch(function (error) {});
};
export let signUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setActivesScreen("chatPage");
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// export let resetUser = (email) => {
//   const auth = getAuth();
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       console.log(email);
//       // Password reset email sent!
//       // ..
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };
//update profile
//sign
// sign ===err? log(err): screenactive
