//lets talk about stop propagation
let button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", function (event) {
  event.stopPropagation();
  button.innerText = "Ive been never clicked";
});

container.addEventListener("click", function (event) {
  container.style.background = "blue";
});

//first ex to show event.preventDefault()
let link = document.querySelector("a");
const linkHandler = function (event) {
  event.preventDefault();
  link.innerText = "Action Prevented";
};
link.addEventListener("click", linkHandler);
