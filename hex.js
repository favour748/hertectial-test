let val = [];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const listOfColor = document.querySelector(".list");

// adding event
btn.addEventListener("click", function () {
  // Genering hex colors
  let hexColor = "#";
  // A loop that run 6time
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  val.push(hexColor);
  const valueList = val.map((el, i) => `<li>${i + 1}   ${el}</li>`).join("");
  listOfColor.innerHTML = valueList;

  document.body.style.background = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
