const form = document.querySelector(".login-form");
const info = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(evt.currentTarget.elements);
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  info.email = email.value;
  info.password = password.value;
  console.log(info);
  evt.currentTarget.reset();
}
