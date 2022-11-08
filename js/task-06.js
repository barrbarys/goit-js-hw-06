const txtInput = document.querySelector("#validation-input");
console.log("Correct number of symbols:", txtInput.getAttribute("data-length"));

txtInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length == txtInput.getAttribute(`data-length`)
  ) {
    txtInput.classList.add("valid");
    txtInput.classList.remove("invalid");
  } else {
    txtInput.classList.remove("valid");
    txtInput.classList.add("invalid");
  }
  console.log("Class added:", txtInput.getAttribute("class"));
});
