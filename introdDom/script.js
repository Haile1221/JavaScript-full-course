// 1. getElementById
// const title = document.getElementById("heading");
// //   manipulate element
// title.style.background ="blue"
//  title.style.color ="white"
//    title.style.fontSize ="30px"

// 2. getElementsByName()

function showSelected() {
  const fruit = document.getElementsByName("fruit");

  let selected = "";
  for (const f of fruit) {
    if (f.checked) selected = f.value;
  }

  document.getElementById("output").textContent =
    selected ? `You chose: ${selected}` : "No fruit selected";
}

// 3 getElementsByTagName() — Select by Tag Name
let paragraphs = document.getElementsByTagName("p");

//    change color for all elements
for (let p of paragraphs) {
  p.style.color = "green";
  p.style.fontSize = "25px";
}
console.log(paragraphs);

// 4️⃣ getElementsByClassName()
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.border = "2px solid orange";
  card.style.margin = "5px";
  card.style.padding = "10px";
}
console.log(cards);

// 5️⃣ querySelector() & querySelectorAll()

// Select the first element with class="btn"
    const button = document.querySelector(".btn");    
    // Add event listener
button.addEventListener("click", () => {
  button.style.backgroundColor = "purple";
button.textContent = "Clicked!";    }); 
 console.log(button);
   // Select all <li> elements with class="active"
    const activeItems = document.querySelectorAll("li.active"); 
        activeItems.forEach((item) => {
      item.style.color = "blue";
      item.textContent += " ✔";
    });

    console.log(activeItems);

