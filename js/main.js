import Shark from "./shark.mjs";

const tigerShark = new Shark("grey", 7, 6, 3);
console.log(tigerShark);

const swimAction = document.getElementById("swimBtn");
const attackAction = document.getElementById("attackBtn");
const restAction = document.getElementById("restBtn");

swimAction.addEventListener("click", () => {
  tigerShark.chase();
});
attackAction.addEventListener("click", () => {
  tigerShark.attack();
});

restAction.addEventListener("click", () => {
  tigerShark.rest();
});
