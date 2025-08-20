let counter = 0;

const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterEl.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterEl.textContent = counter;
});
