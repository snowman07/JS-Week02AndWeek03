let div = document.querySelector(".example-class");
let para = document.querySelector("p");
div.addEventListener("mouseover", function (event) {
  div.style.backgroundColor = "green";
  para.innerHTML = "something";
});

div.addEventListener("mouseout", function (event) {
  div.style.backgroundColor = "blue";
  para.innerHTML = "";
});
