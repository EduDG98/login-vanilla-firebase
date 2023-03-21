const button = document.querySelector("button");

const handleLogout = () => {
  window.location.replace("./index.html");
};

button.addEventListener("click", handleLogout);
