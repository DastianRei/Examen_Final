
import ocurrencia from "./ocurrencias";
const texto = document.querySelector("#texto");
const form = document.querySelector("#texto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  div.innerHTML = "<p>" + ocurrencia(texto.value) + "</p>";
});
