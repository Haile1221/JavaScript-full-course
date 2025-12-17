// appendchild -//end
const list = document.getElementById("list");
const li1 = document.createElement("li");
li1.textContent = "item1 (append child)";
list.appendChild(li1);
//   2-append()  - //multiple  to end
const li2 = document.createElement("li");
const span = document.createElement("span");
span.textContent = "-inside the span";
li2.append("item2(appended)", span);
list.append(li2);
//3- prepend()  -begining
const li3 = document.createElement("li");
li3.textContent = "item 3(prepend)";

list.prepend(li3);
//   4 after() - after selected
const li4 = document.createElement("li");
li4.textContent = "item 4 (after)";
list.append(li4);
const liTarget = document.createElement("li");
liTarget.textContent = "target for after";
list.append(liTarget);
liTarget.after("- added after target");
// 5 insertBefore
const li5 = document.createElement("li");
li5.textContent = "item 5 (insert beore)";
const reference = list.querySelector("li:nth-child(6)");
list.insertBefore(li5, reference);

// 6-inserAdjacentHTML  //beforebegin, afterbegin, beforeend and afteend

const li6 = document.createElement("li");
li6.id = "li6";
li6.textContent = "item 6 (insertAdjacentHTML)";
list.append(li6);

li6.insertAdjacentHTML(
  "beforebegin",
  "<li>Beforebegin: This goes *before begin* li6</li>"
);
li6.insertAdjacentHTML(
  "afterbegin",
  "<li>Afterbegin: This goes *After begin* li6</li>"
);
li6.insertAdjacentHTML(
  "beforeend",
  "<li>Beforeend: This goes *before end* li6</li>"
);
li6.insertAdjacentHTML(
  "afterend",
  "<li>Afterend: This goes *afterend* li6</li>"
);
