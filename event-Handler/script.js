// click event

function sayHello() {
  console.log("button clicked");
}
// add event
document.getElementById("btn").addEventListener("click", sayHello);

// remove event
document.getElementById("btn").removeEventListener("click", sayHello);
// mouse event
function highlight() {
  box.style.background = "green";
}
// add event
const box = document.getElementById("box");
box.addEventListener("mouseover", highlight);
// remove event
//  box.removeEventListener("mouseover", highlight);

// keydown event
function showKey(event) {
  console.log("Pressed :", event.key);
}

// add event
document.addEventListener("keydown", showKey);
// remove event
// document.removeEventListener("keydown", showKey);

// submit event
const form = document.getElementById("myform");
form.addEventListener("submit", function () {
  console.log("form will be submitted");
});

// prevent default event
const email = document.getElementById("email");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form will be submitted");
});

// multiple event
const button = document.getElementById("button");
function handler(e) {
  console.log("Event type:", e.type);
}

// 6 types event
button.addEventListener("click", handler);
button.addEventListener("dblclick", handler);
button.addEventListener("mouseover", handler);
button.addEventListener("mouseout", handler);
