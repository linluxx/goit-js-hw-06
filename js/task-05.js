const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  evt.currentTarget.value !== ""
    ? (output.innerHTML = evt.currentTarget.value)
    : (output.textContent = "Anonymous");
}
