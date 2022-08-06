const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputRangeChange);
function onInputRangeChange() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
