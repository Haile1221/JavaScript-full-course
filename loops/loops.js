// while Loop
// Print the multiples of 10 upto 90
let n = 0;
while(n<91){
    console.log(n);
    n+=10;

}
console.log(0);
console.log(10);
console.log(20);

const values = [10,20,30,40,50,60]
 let i= 0;
 while (i < values.length) {
    console.log(values[i]);
    i++
 }

// Do while loop

// const values = [ 10,20,30,40,50,60]
let j = 0;
do {
    console.log(values[j]);
    j++
} while (j < values.length);

// Foor loop
// const values = [ 10,20,30,40,50,60]
let sum = 0 ;   // 0  1  3  4  5 6   = i
for (let i = 0; i < values.length; i++) {
    

    sum +=values[i]
     }
     console.log(sum);