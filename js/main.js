import Shark from "./shark.mjs";

const tigerShark = new Shark("grey", 7, 5, 3);

console.log(tigerShark);
console.log(`Does the shark have a lung? ${Shark.hasLung}`);
console.log(
  `The shark is ${tigerShark._color} and ${tigerShark.length} meters long. `
);

tigerShark._numberOfFins > 0
  ? console.log(`It has ${tigerShark._numberOfFins} fins.`)
  : console.log(`It has no fins.`);

if (tigerShark.speed > 5) {
  console.log(`It swims fast, at a speed of ${tigerShark.speed}`);
} else {
  tigerShark.speed < 4
    ? console.log(
        `It swims at a speed of ${tigerShark.speed}; it's incredibly slow.`
      )
    : console.log(`It swims at a speed of ${tigerShark.speed}, not very fast.`);
}

tigerShark.isHungry
  ? console.log("The shark feels hungry and wants to hunt.")
  : console.log("The shark is not hungry.");

console.log(`It has an energy level of ${tigerShark.energy}.`);
tigerShark.isTired
  ? console.log("It's tired.")
  : console.log("It's ready to swim around.");

const swimAction = document.getElementById("swimBtn");
const attackAction = document.getElementById("attackBtn");
const restAction = document.getElementById("restBtn");
const speedUpAction = document.getElementById("speedUpBtn");

swimAction.addEventListener("click", () => {
  tigerShark.chase();
});

speedUpAction.addEventListener("click", () => {
  tigerShark.speedup();
});

attackAction.addEventListener("click", () => {
  tigerShark.attack();
});

restAction.addEventListener("click", () => {
  tigerShark.rest();
});
