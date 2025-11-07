// console.log("connected");

// Dot Notation
// let car ={
//     brand :"Toyota",
//     color : "red",
//     age : 25
// }

// let person ={
//     name : "Haile", 
//     age: 25, 
//     country: "Ethiopia"

// }
//  console.log(person.name);
//   console.log(person.age);
//  console.log(person.country);

// console.log(car.brand);
// console.log(car.color);

// console.log(car.age);

// Bracket notation [] , special letters and space

// let person ={
//     "first name" : "Haile", 
//     age: 25, 
//     "55country": "Ethiopia"

// }
//  console.log(person["first name"]);
//   console.log(person.age);
//  console.log(person["55country"]);


// Without Constructor fucntion
// let car1 = {
//     brand:"Toyota",
//     color:"Red"
// }

// let car2 = {
//     brand:"Honda",
//     color:"Blue"
// }

// console.log(car1.brand);
// console.log(car1.color);

// console.log(car2.brand);
// console.log(car2.color);

// 100 or 100000 Millions car 

// With Constructor fucntion
// name starts with Capital letter

function Car(brand, color, speed) {
    // 2 use "this" keyword to set properties
    this.brand  = brand;
    this.color  = color;
    this.speed  = speed;
    // Define a method to show info
    this.info =function(){
        return `Brand:${this.brand} + Color: ${this.color} + Speed: ${this.speed} km/hr` 
    };
}

// 4 use "new" keyword to create similar ojects
let CarHawasa = new Car("Toyota", "Red", 120)
let CarMekele = new Car("Honda", "Blue", 200)
let CarBahirDar = new Car("Nissan", "White", 250)

// display info

console.log("This is from Hawasa", CarHawasa.info() );
console.log("This is from Mekele", CarMekele.info() );
console.log("This is from Bahir Dar", CarBahirDar.info() );