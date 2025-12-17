// // Synchronous javaScript /blocing
// //  to complete a cetain task
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
// // election process
console.log("Check voter id ");
console.log("give ballon paper ");
console.log(" Vote marks vote ");
console.log("Seal ballon box ");
console.log(1);
console.log(2);
console.log(3);
// Asynchonous
console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);
console.log("1. js starts a task");
setTimeout(
  () => console.log("4. js retruns later when the result is ready"),
  2000
);
console.log("2.Js does not wait");
console.log("3.Js continues with other tasks");

// asynchronous election results reporting
setTimeout(() => console.log("Center A Finshed"), 3000);
setTimeout(() => console.log("Center B Finshed"), 100);
setTimeout(() => console.log("Center C Finshed"), 0);

// Callback /wash, dry, fold and store
function washClothes(Callback) {
  console.log("Washing clothes ...");
  setTimeout(() => {
    console.log("Clothes are washed ");
    Callback();
    //    run later
  }, 3000);
}
washClothes(() => {
  console.log("Now we dry the clothes ");
});

// callback hell
// Many steps depend on the previous one ->becomes deply nested

function wash(callback) {
  setTimeout(() => {
    console.log("1.clothes washed");
    callback();
  }, 500);
}

// dry
function dry(callback) {
  setTimeout(() => {
    console.log("2.clothes dried");
    callback();
  }, 500);
}

// fold

function fold(callback) {
  setTimeout(() => {
    console.log("3.clothes folded");
    callback();
  }, 500);
}
// store
function store(callback) {
  setTimeout(() => {
    console.log("4.clothes stored in closet");
    callback();
  }, 500);
}

// Nested callbacke hell
wash(() => {
  dry(() => {
    fold(() => {
      store(() => {
        console.log("Done!!! but this callback hell");
      });
    });
  });
});

//  Promise -> solves callbackhell
//  resolve, reject
let homeWork = new Promise((resolve, reject) => {
  let done = true;
  if (done) {
    resolve("I finished my Homework ");
  } else {
    reject("I couldn't do my homework");
  }
});

// Wash function /returns a promise /

function wash() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1.clothes washed");
      resolve(); //success move the next
    }, 500);
  });
}
// dry
function dry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2.clothes dried");
      resolve(); //success move the next
    }, 500);
  });
}
// fold
function fold() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3.clothes folded");
      resolve(); //success move the next
    }, 500);
  });
}

// Store

function store() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4.clothes stored in closet");
      resolve(); //success move the next
    }, 500);
  });
}

// // without callback hell
wash() //after washing , dry
  .then(dry) //after drying, fold
  .then(fold) //after fold, store
  .then(() => {
    console.log("All done!!! no more callback hell");
  });

// Async/Await - to solve the .then promise chainig
// // 1. wash
function wash() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1.clothes washed");
      resolve(); //success move the next
    }, 500);
  });
}
//2. dry
function dry() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2.clothes dried");
      resolve(); //success move the next
    }, 500);
  });
}
//3. fold
function fold() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3.clothes folded");
      resolve(); //success move the next
    }, 500);
  });
}

//4. Store

function store() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4.clothes stored in closet");
      resolve(); //success move the next
    }, 500);
  });
}

// 5.The async function that retutns everything in order...
async function runLaundary() {
  await wash(); //waiting for washing to finsh
  await dry(); //then dry
  await fold(); //then fold
  await store(); //then store
  console.log("All done!!!- async/await  make it super clean ");
}

console.log(runLaundary());

// Fetch API and HTTP Requests

async function loadCountries() {
  try {
    // 1. send HTTP GET request
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags"
    );
    //2. Check if the request was successfull
    if (!res.ok) throw Error(`HTTP Error:${res.status}`);
    //3. parse json response
    const countries = await res.json();
    // 4. doing something
    // print all countries
    countries.forEach((country) => {
      console.log("Country:", country.name.common);
      console.log("Capital:", country.capital?.[0]);
      console.log("Population:", country.population);
      console.log("Flag:", country.flags.png);
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}
loadCountries();

// Error Handling
async function load() {
  const res = await fetch("https://wrong-url/users");
  if (!res.ok) {
    throw new Error("Failed:" + res.status);
  }
  return "success";
}

load()
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error.message));
