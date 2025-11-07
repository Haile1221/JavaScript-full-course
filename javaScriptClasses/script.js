// // // // console.log("connected")

// // // // constuctor fucntion before ES6

// // // function Person(name, age) {
// // //     // set propertied using "this" keyword
// // //     this.name = name;
// // //     this.age = age;
// // //    }

// // //    let user1 = new Person("Haile", 30)
// // //    let user2 = new Person("Selam", 25)

// // //    console.log(user1);
// // //    console.log(user1.name);
// // //    console.log(user1.age);

// // // // user2
// // //  console.log(user2);
// // //    console.log(user2.name);
// // //    console.log(user2.age);
// // // Class/Es6 Modern

// // // function Person(name, age) {
// // //   this.name = name;
// // //   this.age = age;
// // // }
// // //    in writting
// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   sayHello() {
// //     console.log(`Hi, Im am ${this.name} and ${this.age} years old`);
// //   }
// // }

// // // // How to acess properties in class?

// // let user1 = new Person("Haile", 30);
// // user1.sayHello();
// //  let user2 = new Person("Selam", 25)
// //  user2.sayHello();
// // // //  user1
// // //   console.log(user1);
// // //    console.log(user1.name);
// // //    console.log(user1.age);
// // // // //    user2
// // // //  user1
// // //   console.log(user2);
// // //    console.log(user2.name);
// // //    console.log(user2.age);

// // additionl example 

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.status = "active"; // default value
//   }

//   updateStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// let student1 = new Student("Alex", 20);
// console.log(student1.name); // Alex
// student1.updateStatus("on Registration");
// console.log(student1.status); // graduated

// class name {
//     constructor(parameters) {
        
//     }
// }

// Example 3 

class Car {
    constructor(brand, model) {
        this.brand= brand;
         this.model= model;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting ...`);
    }
}

let car1 = new Car("Toyota", "model1")
let car2 = new Car("Tesla",  "model2")
let car3 = new Car("Honda", "model3")
let car4 = new Car("Nissan",  "model4")
 car1.start()
 car2.start()
  car3.start()
 car4.start()
