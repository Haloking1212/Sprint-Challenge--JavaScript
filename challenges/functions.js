// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function dividingNums(x,y,cb) {
  cb(x / y);
}
dividingNums(50,5,(dividing) => {
  console.log('This is dividing x and y:',dividing);
});


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (x,y,consume){
  consume(x + y);
}
add(2,2, (adding) => {
  console.log('This is adding x and y with consume as the cb:',adding);
});

function multiply (x,y,consume){
  consume(x * y);
}
 multiply(10,16, (multiplying) => {
   console.log('This is mulitplying x and y with consume as the cb:',multiplying);
});

function greeting(first,last,consume){
  consume(first + ' ' + last)
}
greeting('Mary', 'Poppins', (greet) => {
  console.log(`Hello ${greeting.first} ${greeting.last}, nice to meet you!`,greet)
});

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction() can access the variable 'internal' because that variable has been created inside the scope of 'myFunction()' which is local to the 'nestedFunction()'.


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();