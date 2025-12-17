// console.log("Connected");
// Arrays
// let a = [10, 20, "hi", true]; //array []
//   console.log(a);
//   console.log(a[3]);
// console.log(typeof a);
// Objects {}

let contact = {channel: "beshilotube"} //empty oject
// add property
contact.mobile = "0930767632"
// console.log(contact.mobile);
contact.email = "hzerfu10@gmail.com"
contact.Country = "Ethiopia"
contact.name = "Haile"
console.log(contact);
console.log(typeof contact);

console.log(contact[0]);

// let person = {"first name" : "Haile"}
// we cannot use . dot instead []
let persons = {firstName : "Haile"}
// use . dot
// console.log = dot nation
// console ->object
// log -> function
console.log(typeof console);
console.log(typeof console.log);
console.log(console);

 let test = {
     nr: 10,
     b: false,
     arr: [10, 20, 30,40],
  obj: { x: 10, y: 20 },
  fn: function(arg){ console.log(arg); }
 };
test.fn(123);

console.log(test.arr);

// Create an object called "car"
let car = {
  brand: "Toyota",
  speed: 0,
  accelerate: function(amount) {
    this.speed += amount; // "this" refers to the car itself
  },
  showSpeed: function() {
    console.log("Current speed is " + this.speed + " km/h");
  }
};

// Use the methods
car.accelerate(50);
car.showSpeed(); // Output: Current speed is 50 km/h

let person = {
  firstName: "Haile",
  private: "beshilotube@home.com",
  work: "Ronald@work.com",
  };
//   to add  

person.age = 29

// to modify 
person.firstName = " Zerfu"

console.log(person);

let person= {firstName: ' Zerfu', private: 'beshilotube@home.com', work: 'Ronald@work.com', age: 29}
console.log(person.firstName);
console.log(person.age);
delete

delete person.private 
delete person.work

delete person.age

console.log(person);

// [] use "", or '' for property name
// let person= {"3@first Name": ' Zerfu', "pri vate": 'beshilotube@home.com', work: 'Ronald@work.com', age: 29}
// console.log(person.firstName);
// console.log(person.age);




let person = {   
    "first name": "Abel",  
    "home-town": "Addis Ababa",
  age: 25 };
  console.log(person["first name"]);
  console.log(person["home-town"]);
  console.log(person.age);
