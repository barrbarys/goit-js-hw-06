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
  const userData = { email: email.value, Password: password.value };

  console.log("Email:", userData.email);
  console.log("Password:", userData.Password);
  event.target.reset();
}
