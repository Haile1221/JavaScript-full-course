// //1- event target - the button itself
const btn = document.getElementById("btn");
const message = document.getElementById("message");

// //2- Event listener - listens for click
btn.addEventListener("click", showMessage);

// // 3 - Event handler ->(the function that runs when event happens )

function showMessage(event) {
  // event ->event object
  message.textContent = "you clicked the button";
  console.log("event type:", event.type);
  console.log("event target", event.target);
}

function sayHello() {
    console.log("hello from handler");
    
}

// event - click
//handler - sayHello()
// for method 1 
// handler fucntion 
function handleClick() {
    console.log("button clicked ( inline)");
}

// method 2 -DOM Property handler
// const btn = document.getElementById("btn")
btn.onclick = function() {
    console.log("clicked(DOm property)");
} 

// only one handler allowed

 // method -3 -addEventListener() best practice
const button = document.getElementById("button");

// Handler #1 — Click
button.addEventListener("click", function () {
  console.log("clicked handler 1");
});

// Handler #2 — Another Click Handler
button.addEventListener("click", function () {
  console.log("clicked handler 2");
});

// Handler #3 — Mouse Enter
button.addEventListener("mouseenter", function () {
  console.log("mouse entered");
});

// Handler #4 — Mouse Leave
button.addEventListener("mouseleave", function () {
  console.log("mouse left");
});

// Handler #5 — Double Click
button.addEventListener("dblclick", function () {
  console.log("double clicked");
});

