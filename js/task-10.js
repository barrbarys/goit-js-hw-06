function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNums = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const createBoxes = (amount) => {
  const divsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 + i}px`;
    div.style.width = `${30 + 10 + i}px`;
    div.style.backgroundColor = getRandomHexColor();
    divsToAdd.push(div);
  }
  return divsToAdd;
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputNums.value);
  boxes.append(...boxesToAdd);
});
console.log(inputNums.value);
destroyBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
