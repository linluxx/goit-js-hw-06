function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

btnEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  colorName.textContent = document.body.style.background = getRandomHexColor();
}
