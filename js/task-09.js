function getRandomHexColor(col) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector("button.change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");
const textColor = document.querySelector("p");
changeColorButton.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;

  spanColor.textContent = color;
  spanColor.style.color = "#ffffff";

  if (color == "#ffffff") {
    spanColor.style.color = "#000000";
    textColor.style.color = "#000000";
  } else if (color == "#000000") {
    spanColor.style.color = "#ffffff";
    textColor.style.color = "#ffffff";
  }
});
