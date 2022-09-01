import debounce from "debounce";

const passwordInput = document.querySelector(".js-password");
const error = document.querySelector(".js-error");
document.querySelector("form").addEventListener("submit", (e) =>
  e.preventDefault());
passwordInput.addEventListener("input", debounce(passwordValid, 1000));

function passwordValid(event) {
  const passArr = event.target.value.split("");
  if (passArr.some((elem) => !isNaN(Number(elem)))) {
    error.textContent = "Ok";
    error.style.color = "green";
    return;
  }
  error.style.color = "red";
  error.textContent = "ERROR";
  setTimeout(() => error.textContent = "", 3000);
}