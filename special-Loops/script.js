// for ...of Loop->iterate over array values
const values = [10,20,30,40, 50]
for (const element of values) {
    console.log(element);
}

// for.. in loop ->iterate over object keys
const user ={
    channel:"beshilo tube",
    age : 25,
    country: "Ethiopia"
}

for (const key in user) {
       
   console.log(  user[key]);
     
}

console.log(user);

// const values = [10,20,30,40, 50,60]

for (const key in values) {
        
    const element = values[key];
        console.log(element);
}

// for ..each ->callback function for each item in the array

// const values = [10,20,30,40, 50,60, 70,100]

values.forEach(element => {
    console.log(element);
});

// Map() ->creates new array
// const values = [10,20,30,40, 50,60, 70,100]

const newValues = values.map(function(number) {
    return number *5
  
    
})
  console.log(newValues);

// Break and continue

for (let i = 0; i < 10; i++) {
     if(i == 3 ) continue ; //skip 3
     if (i == 7) break  ; //stop 7
     
    
       console.log(i);

    
}

