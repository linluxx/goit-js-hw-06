const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputBlurHandler);
function inputBlurHandler(evt) {
  inputEl.classList.add("invalid");
  inputEl.classList.remove("valid");
  if (evt.currentTarget.value.length === +inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
