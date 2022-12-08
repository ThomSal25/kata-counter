const main = document.querySelector("main");
const number = document.querySelector(".counter");
const reset = document.querySelector(".reset");
const root = document.querySelector(":root");
let counter = 0;
let barCounter = 0;

function counting() {
  counter++;
  barCounter++;
  if (barCounter === 100) {
    barCounter = 0;
  }
  console.log(counter);
  number.innerText = counter;
  root.style.setProperty("--gold", barCounter + "%");
  root.style.setProperty("--white", "0%");
}

main.addEventListener("click", counting);

reset.addEventListener("click", function (r) {
  number.textContent = "0";
  counter = 0;
  barCounter = 0;
  root.style.setProperty("--gold", "0%");
  reset.blur();
});

document.addEventListener("keydown", function (e) {
  if (["Enter", " "].includes(e.key)) {
    counting();
  }
});
