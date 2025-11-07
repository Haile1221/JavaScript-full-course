// // // Dot property key-value
// // let person = {
// //     name: "Haile",
// //     age : 29,
// //     job : "part-time Youtuber"
// // }

// // // How to access object properties

// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.job);

// // console.log(person);

// // Bracket notation []
// //   when property  names has special letters and spaces

// let person = {
//   " home country": "Ethiopia",
// };

// console.log(person[" home country"]);

// Without Constructor Function

// let car1 ={
//     brand:"Toyota",
//     color:"red"
// }

// let car2 ={
//     brand:"Honda",
//     color:"red"
// }

// console.log(car1);
// console.log(car2);

// With Constructor Function



// 1️⃣ Name starts with a capital letter
function Car(brand, color, speed) {
  // 2️⃣ Use "this" to set properties
  this.brand = brand;
  this.color = color;
  this.speed = speed;

  // 3️⃣ Define a method to show info
  this.showInfo = function() {
    return `Brand: ${this.brand}, Color: ${this.color}, Speed: ${this.speed} km/hr`;
  };
}

// 4️⃣ Use "new" keyword to create objects
let carHawasa = new Car("Toyota", "Red", 120);
let carMekele = new Car("Honda", "Blue", 200);
let carBahirDar = new Car("Nissan", "Black", 180);

// 5️⃣ Display info
console.log("This is from Hawasa:", carHawasa.showInfo());
console.log("This is from Mekele:", carMekele.showInfo());
console.log("This is from Bahir Dar:", carBahirDar.showInfo());
