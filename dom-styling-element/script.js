// inline style manipulation
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // Change styles dynamically
  title.style.color = "blue";
  title.style.fontSize = "50px";
  desc.style.backgroundColor = "blue";
  btn.style.padding = "15px";
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
  btn.style.borderRadius = "15px";
});

// multiple style

const box = document.getElementById("box");
box.style.cssText = `
 background-color : blue;
 color : white;
 padding : 20px;
 border-radius = 10px;
 
 `;

//  read computed styles using getComputedStyle()

const p  = document.getElementById("text")
  const styles = getComputedStyle(p)
      console.log(styles.fontSize);
      console.log(styles.color);
      console.log(styles.padding);

// Class list


const item = document.getElementById("item")
   //  add class
   item.classList.add("active")
    // remove class
    item.classList.remove("card")
    // toggle -add/remove automatically
    item.classList.toggle("dark-mode") //add
    item.classList.toggle("dark-mode") //remove
    // contains 
    console.log(item.classList.contains("active"));
    console.log(item.classList.contains("card"));
