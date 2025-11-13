// // // // Arrays
// // // // 2 ways to create Arrays
// // // //  1st Literal way
// // // let fruit = ["banana", "orrange", "Lemon"];
// // // //   console.log(fruit);
// // // // 2nd  Using  Constructor
// // // //    new Array keyword

// // // // let fruit = new Array ("banana", "orrange", "Lemon", "mango")

// // // //  console.log(fruit);

// // // // Checing Arrays
// // // Array.isArray(["dog", "cat"]);
// // // console.log(Array.isArray(["dog", "cat"]));
// // // console.log(Array.isArray("cat"));
// // // console.log(Array.isArray(5));

// // // console.log(Array.isArray(fruit));
// // // console.log(Array.isArray(["apple", "banana"]));
// // // console.log(Array.isArray({ fruit: "apple" }));
// // // console.log(Array.isArray("apple"));
// // // console.log(Array.isArray(123));
// // // console.log(Array.isArray(null));

// // // Accessing Elements
// // let fruit = ["banana", "orange", "Lemon", "mango"];
// // console.log(fruit[0]);
// // console.log(fruit[1]);
// // console.log(fruit[2]);
// // console.log(fruit.length);
// //   console.log(`original array `,fruit);
// // // Adding Elemets
// // //   end push()
// //   fruit.push("papaya")
// //    console.log(`this is an end ` ,fruit);
// // // begining /starting unshift()
// //  fruit.unshift("cabage")
// //   console.log(`this is begining `, fruit);

// // add elemnts At middle or any where splice()
// // let fruit = ["banana", "orange", "Lemon", "mango"];
// //   fruit.splice(1, 0, "carrot")
// //   console.log(`without delete`, fruit);
// //    console.log(fruit.length);

// //    fruit.splice(1, 1, "cabbage")
// //   console.log(`after delete`, fruit);
// //    console.log(fruit.length);

// //       fruit.splice(0, 6, "cabbage", "dog", "cat")
// //   console.log(`third delete`, fruit);
// //    console.log(fruit.length);

// // Removing elements
// //   remove last element or  end  pop()
// let fruit = ["banana", "orange", "Lemon", "mango"];
// console.log(fruit);
// fruit.pop();
// fruit.pop();
// console.log(fruit);
// //   remove first element or  beginning  shift()

// console.log(fruit);
// fruit.shift();
// fruit.shift();
// console.log(fruit);

//remove elemnts At middle or any where splice()
// let fruit = ["banana", "orange", "Lemon", "mango"];
// console.log(fruit);

// fruit.splice(2, 0, "hhhhh")
// console.log(fruit);

// Cobining Arrays ->concat
// let boys = ["alemu", "Abebaw"]
// let girls =["selam", "Hiwot"]
//  console.log(boys.concat(girls));
//  // join into single string->join
//  console.log(boys.join("==="));
//    Finding Elements
//    includes
// let number = [1,2,3,4,5,"banana", "orange"]
// console.log(number.includes(2));
// console.log(number.includes(3));
// console.log(number.includes(7));
// console.log(number.includes("banana"));
// console.log(number.includes("mango"));
//     //   indexof

//     console.log(number.indexOf("orange"));
// console.log(number.indexOf(7));
//   Filtering Arrays
// let nums = [2, 5, 8, 1, 7,4];
// let result = nums.filter((n) => n % 2 === 0);
//    console.log(result);
//    Map Arrays
// let nums = [2, 5, 8, 1, 7,4];
// let doubled = nums.map(n=>n*2)
//    console.log(doubled);
//   example 2

// let students = [
//   { name: "Mimi", score: 70 },
//   { name: "Beka", score: 85 },
//   { name: "Liya", score: 95 },
//     { name: "selam", score: 96 },
//       { name: "hiwi", score: 79 },
// ];

// let results = students.map(
//   (s) => `${s.name}:${s.score >= 80 ? "pass" : "fail"}`
// );
// console.log(results);

// Reducing Arrays

// let prices = [10, 20, 30];
// let total = prices.reduce((sum, p) => sum + p, 0);
// console.log(total);

// let fruit = ["banana", "orange", "Lemon", "mango"];

// let allfruit = fruit.reduce((result, f) => result + " " + f);
// console.log(allfruit);

// sorting and reversing
// let fruit = ["banana", "orange", "Lemon", "mango"];
// fruit.sort();
// console.log(fruit);

// fruit.reverse();
// console.log(fruit);

// let num = [7,8,3,5]
//   num.sort()
//   console.log(num);

//     num.reverse()
//   console.log(num);
// Slicing
 let fruit = ["banana", "orange", "Lemon", "mango", "cabbage"];
   let few = fruit.slice(1, 4)  //lemmon, mongo
    console.log(few);
    let lasttwo = fruit.slice(-1)
        console.log(lasttwo);