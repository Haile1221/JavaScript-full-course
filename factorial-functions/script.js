// factorial fucntions

function factorial(n) {
    // base case --stop the recursion when n reaches 1
    if (n===1) {
        return 1
    }else{
        // Recusrsive call ---multiply n by factorial of (n-1)
        return n*factorial(n-1);
        /*
        6 *factorial(5)  
        6*(5*factorial(4) ) 
        6*(5*(4*factorial(3) )) 
          6*(5*(4*(3*factorial(2) )))
           6*(5*(4*(3*(2*factorial(1) ))))
            6*(5*(4*(3*(2*1))))
        = 720
        
        */
    }

}

console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(9));
console.log(factorial(15));
