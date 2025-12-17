// scope
// var - function scope

function testVar() {
    

    if (true){
        var x  = 10
        console.log(x)
        let y = 20 ;
        console.log(`I am inside the block. my value is ${y}` )

    }

     console.log(x)
       let y = 30 ;
     
    console.log(`I am inside the block. my value is ${y}` )
    
}
testVar()

console.log(x)

// Hoisting possible in var but not in let
console.log(a);
var a = 5;


console.log(b);
let b = 30;

// Re-declare
var aa = 1;
var aa = 2;/*in var redeclare  not allowed  */
console.log(aa)


// let 
let bb = 5;
let bb = 4; /*in let redeclare  not allowed  */
console.log(bb)

// re-assign both possible but not in const
var p = 1
p = 2
console.log(p)

let q = 3
q = 4
console.log(q)

const PI = 3.14

PI = 5 
console.log(PI)