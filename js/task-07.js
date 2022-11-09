const fontSizeChange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fonSizeChange.addEventListener("input", (evt) => {
  text.style.fontSize = `${evt.currentTarget.value}px`;
});
