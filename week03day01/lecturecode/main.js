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

// legitcomment --- first ex to show event.preventDefault()
// legitcommment --- in this way, variable (linkHandler) was declared to hold the function!!!!!

// let link = document.querySelector("a");
// const linkHandler = function (event) {
//   event.preventDefault();
//   link.innerText = "Action Prevented";
// };
// link.addEventListener("click", linkHandler);

// legitcomment --- this is the example in powerpoint slide 14
// legitcomment --- in this way, the function is directly assigned as the event handler

let link = document.querySelector("a");
link.addEventListener("click", (event) => {
  link.innerText = "Action Prevented!";
  event.preventDefault();
});
