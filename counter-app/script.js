const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = parseInt(localStorage.getItem("counter")) || 0;
updateCounter();

// Utility: update counter + simpan ke localStorage
function updateCounter(color = "#000") {
  counterEl.textContent = count;
  counterEl.style.color = color;

  // animasi scale
  counterEl.style.transform = "scale(1.3)";
  setTimeout(() => {
    counterEl.style.transform = "scale(1)";
    counterEl.style.color = "#000";
  }, 200);

  localStorage.setItem("counter", count);
}

function increment(step = 1) {
  count += step;
  updateCounter("green");
}

function decrement(step = 1) {
  count -= step;
  updateCounter("red");
}

// Button Events
incrementBtn.addEventListener("click", () => increment());
decrementBtn.addEventListener("click", () => decrement());
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Keyboard Events
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    // naik 1
    case "+":
    case "k":
    case "ArrowRight":
    case "ArrowUp":
      increment();
      break;

    // turun 1
    case "-":
    case "j":
    case "ArrowLeft":
    case "ArrowDown":
      decrement();
      break;

    // naik 10
    case "PageUp":
      increment(10);
      break;

    // turun 10
    case "PageDown":
      decrement(10);
      break;

    // reset
    case "0":
      count = 0;
      updateCounter();
      break;
  }
});
