// // console.log("connected");
// function showMessage(msg) {
    
//     console.log(msg);
// }

// let sm  = showMessage

// sm("its works")
// console.log(typeof sm);

// Function Expression

// named function
// function addNumbers(a,b) {
//     return a +b;
// }

// console.log(addNumbers(10, 20));

// // to change into expression
// let myAdd = function (a,b) {
//     return a +b;
// }
// // Anonymous function

// console.log(myAdd(10,20));

// Arrow Functions

// let myAdd =  (a,b) => a +b;
// console.log(myAdd(10,20));


// Passing functions as parameter
// function operation(func, x, y) {
//     return func(x, y);
// }

// console.log(operation((a, b) => a + b, 10, 20));
// console.log(operation((a, b) => a * b, 10, 20));
// console.log(operation((a, b) => a - b, 50, 20));
// Example arrow function with one parameter

// let double = x =>x+2
// console.log(double(5));

// Example arrow function with two parameter


function getMeanTemp(temperatures) {
   let sum = 0;      for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];    }     return sum / temperatures.length; }
let day1 = [12,12,11,11,10,9,9,10,12,13,15,18,21,24,24,23,25,25,23,21,20,19,17,16];
console.log(getMeanTemp(day1));


// const getMeanTemp =(temperatures)=>temperatures.reduce((sum,temp) =>sum + temp, 0)/temperatures.length;

// let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];

// let day2 = [14, 15, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 15, 14, 14];

// let day3 = [10, 9, 9, 8, 7, 7, 8, 9, 10, 12, 14, 15, 16, 17, 17, 16, 15, 14, 12, 11, 10, 9, 9, 8];



// console.log("Average day -1 :", getMeanTemp(day1));
// console.log("Average day -2 :", getMeanTemp(day2));
// console.log("Average day -3 :", getMeanTemp(day3));
