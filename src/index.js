import { firebaseConfig } from "./firabase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const submitButton = document.querySelector("button");
const errorDiv = document.createElement("div");
const label = document.querySelector("label+label");

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const handleLogin = (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.replace("./upload.html");
      console.log("dentro");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      errorDiv.classList.add("error");
      errorDiv.textContent = "Wrong user or password";
      label.appendChild(errorDiv);
    });
};

submitButton.addEventListener("click", handleLogin);
