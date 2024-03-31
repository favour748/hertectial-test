// tying
let colors = ["red", "blue", "yellow", "pick", "black"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // static way
  const randomNumber = getRandomNumber();
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// to generate random colors
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
