// traversing elements
const child = document.getElementById("child");
//  Accesing Parent using ParentNode
console.log(child.parentNode.id);
//  Accesing Parent using ParentElement
console.log(child.parentElement.tagName);
// example to change parent background
child.parentElement.style.backgroundColor = "blue";
child.parentElement.style.padding = "20px";
child.parentElement.style.fontSize = "50px";

// children
const container = document.getElementById("container")
//   show all childrent
 console.log(container.children);
  console.log(container.childElementCount);
  console.log(container.firstElementChild.tagName);
    console.log(container.lastElementChild.tagName);

    // style first and last child
    container.firstElementChild.style.color ="blue"
     container.lastElementChild.style.color ="red"
     container.firstElementChild.style.fontSize ="50px"
     container.lastElementChild.style.padding ="20px"

// Sibling
const second = document.getElementById("second");
//  Acessing the previous sibling
console.log(second.previousElementSibling.id);
//  Acessing the next sibling
console.log(second.nextElementSibling.id);
// style
second.previousElementSibling.style.color = "blue";
second.nextElementSibling.style.color = "red";
