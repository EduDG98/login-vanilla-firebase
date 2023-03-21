import { firebaseConfig } from "./firabase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const submitButton = document.querySelector("button");
const errorDiv = document.createElement("div");
const label1 = document.querySelector("label");
const label2 = document.querySelector("label+label");
const wellcome = document.createElement("div");
const container = document.querySelector(".login-container");
const logoutButton = document.createElement("button");

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const handleLogin = (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      submitButton.style.display = "none";
      label1.style.display = "none";
      label2.style.display = "none";
      logoutButton.textContent = "Logout";
      container.appendChild(logoutButton);
      wellcome.textContent = "Wellcome!";
      wellcome.classList.add("show");
      container.appendChild(wellcome);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      errorDiv.classList.add("error");
      errorDiv.textContent = "Wrong user or password";
      label2.appendChild(errorDiv);
    });
};

const handleReset = () => {
  window.location.reload();
};

submitButton.addEventListener("click", handleLogin);
logoutButton.addEventListener("click", handleReset);
