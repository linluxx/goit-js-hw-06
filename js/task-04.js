const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", valueDecrement);
function valueDecrement(evt) {
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
}

incrementBtn.addEventListener("click", valueIncrement);

function valueIncrement(evt) {
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
}
