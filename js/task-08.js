const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", checkLogin);

function checkLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Потрібно заповнити всі поля");
  }
  const userData = { email: email.value, password: password.value };

  console.log(userData);

  event.currentTarget.reset();
}
