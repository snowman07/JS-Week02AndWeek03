//enter code below

console.log("Hello from JS file");

let promptName = prompt("Whats your name?");
const GREETING = "Yohh ";
alert(GREETING + promptName);
// this is the other way to code alert
//alert("Yohh " + promptName);

const greet = function () {
  let addedSentence = document.querySelector("span");
  addedSentence.innerHTML = "Yohhh!!! " + promptName + ". You rock";
};
greet(); // use to call greet function
