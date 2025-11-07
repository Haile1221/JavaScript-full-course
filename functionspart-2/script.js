// // The return statement
// // function getTrue(){
// //    console.log("Above return");
// //  return true //function ends here and sends back true
// //  console.log("below return");
 
// // }
// // getTrue()


// function getMeanTemp() {
//     const temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
//     // step 1:initialize total
//     let total = 0;
//     // step2: loop through each tempreture and add to total
//     for (const temp of temperatures) {
//         total+= temp;
//     }
//     // step 3: display total sum before returning.
//     console.log("Total Sum of Tempratures:", total);
//     // step 4:calculate the mean(average)
//     const mean = total / temperatures.length
//     // step 5 : Return the mean Temperature
//     return mean
// }
// // Step 6: Display the average temperature
// console.log("Average Temperature:", getMeanTemp().toFixed(2));
// // getMeanTemp()

// Parameteres

// function add(first, second) {
//    return first +second 
// }

// // console.log("the sum of this number is:", add(6, 7));
// function getMeanTemp(temperatures) {
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
        
//     }
//     return sum /temperatures.length
// }

// let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];

// let day2 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]; 

// let day3 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]; 
// console.log(getMeanTemp( day1));
// console.log(getMeanTemp(day2));
// console.log(getMeanTemp(day3));

// Shadowing

let a = 100; b = 200; c = 300;
function test(a) {
    let b = 10;
    console.log( a); //parameter a
     console.log(b); //b local varible
      console.log(c); //global
}
test(1)
console.log(a,b,c);
