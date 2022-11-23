const fontSizeChange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeChange.addEventListener("input", (evt) => {
  text.style.fontSize = `${evt.currentTarget.value}px`;
});
