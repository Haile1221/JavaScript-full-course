 // without functions
 let temperatures = [12,12,11,11,10,9,9,10,12,13,15,18,21,24,24,23,25,25,23,21,20,19,17,16];

 let sum = 0;
 for (let i = 0; i < temperatures.length; i++) {
   sum +=temperatures[i]
      // round-1 sum 0+12 =12
        // round-2 sum 12+12 =12
        let meanTemp  = sum/temperatures.length
        console.log(`mean: ${meanTemp}`);

 }

// with functions
// Declaring functions

function name (){
    // codes
}
// example
 
function getMeanTemp(){
    let temperatures = [12,12,11,11,10,9,9,10,12,13,15,18,21,24,24,23,25,25,23,21,20,19,17,16];
 let sum = 0;
 for (let i = 0; i < temperatures.length; i++) {
   sum +=temperatures[i]
      
        let meanTemp  = sum/temperatures.length
    //    console.log(meanTemp);
     console.log(`inside loop : ${sum}`);
       
 }
 console.log(`outside loop : ${sum}`);
}
getMeanTemp()
// console.log(sum);

// Return Statement

function getMeanTemp() {
  let temperatures = [12,12,11,11,10,9,9,10,12,13,15,18,21,24,24,23,25,25,23,21,20,19,17,16];
  let sum = 0;

  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
//  return meanTemp;
 
  let meanTemp = sum / temperatures.length;

  console.log(`Sum of temperatures: ${sum}`);
  console.log(`Mean temperature: ${meanTemp}`);

  return meanTemp;

}

// getMeanTemp();
// funtion part3
 function factorial(n) {
  // Base case – stops the recursion
  if (n === 1) {
    return 1;
  } else {
    // Recursive call
    return n * factorial(n - 1); } }
console.log(factorial(6));
