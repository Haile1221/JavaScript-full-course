// // javaScript object properties
// //  key/prop vs value
// let car = {
// brand: "Toyota",
// model : "2025"
// }

// Dot Notation

class Student {
  constructor(name, age) {
    this.name = name;  // property created
    this.age = age;    // property created
    this.status = "active"; // default value
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Create an instance
let student1 = new Student("Alex", 20);
console.log(student1.name); // Alex
student1.updateStatus("graduated");
console.log(student1.status); // graduated

     