let counterValue = 0;
const dispCount = document.querySelector("#value");
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');
minus.addEventListener("click", () => {
  counterValue--;
  dispCount.textContent = counterValue;
});
plus.addEventListener("click", () => {
  counterValue++;
  dispCount.textContent = counterValue;
});
