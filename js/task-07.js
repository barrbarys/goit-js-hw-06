const fontChange = document.querySelector("#font-size-control");
const InputText = document.querySelector("#text");
fontChange.addEventListener("change", (evt) => {
  InputText.style.fontSize = `${evt.currentTarget.value}px`;
});
