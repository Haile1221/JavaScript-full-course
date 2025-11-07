// // console.log("connected ");
// // getters and setters
// class Student {
//     constructor(name) {
//         this._name = name; //_name is the real data stored inside the box
        
//     }
//     // Getters -> Let you read the name safely
//     get name(){
//         return this._name;
//     }
//     // Setter -> Let you change the name safely
//     set name(newName ){
//         if (typeof newName === "string") {
//             // check that its text
//             this._name = newName;
//         } else {
//             console.log("Name must be text");
//         }
//     }
// }

// // let's use the code 

// let student1 = new
// Student("Alex")
// console.log(student1.name); //uses getter - Alex

// student1.name = "Selam " //uses setter - change safely
// console.log(student1.name);
// student1.name = 1235;
// console.log(student1.name);


// Inheritance

// top main class or super class
class Pesrson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
                
    }
    greet(){
        console.log(`Hi, I am ${this.name} and ${this.age} years old`);
    }
}

// child class or subclass
// extends -inheritance
class Student extends Pesrson {   
    constructor(name, age, grade) {
        super(name, age); //Calls Person constructor from top
        this.grade = grade;
    }
}

let student1 = new Student("Alex", 25, "A")
console.log(student1.name);
console.log(student1.age);
console.log(student1.grade);

student1.greet()

// Additional exmple
class Teacher extends Pesrson {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject;
    }
    teach(){
        console.log(`${this.name} teaches ${this.subject}`);
    }
}

let teacher1 = new Teacher("Haile", 30, "javaScript")
console.log(teacher1.name);
console.log(teacher1.age);
console.log(teacher1.subject);
teacher1.teach()