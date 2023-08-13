//Problem 1
// 1. let num = 10;
//   console.log(typeof num); //Output number


// 2.let str = "Hello, world!";
//   console.log(typeof str); // Output: "string"

// 3.let bool = true;
//   console.log(typeof bool); // Output: "boolean"

// 4.let obj = { name: "John", age: 25 };
//   console.log(typeof obj); // Output: "object"

// 5.let func = function() {
//     console.log("Hello!");
//   };
//   console.log(typeof func); // Output: "function"

// 6. let undefinedVar;
//    console.log(typeof undefinedVar); // Output: "undefined"

// 7. let nullVar = null;
//    console.log(typeof nullVar); // Output: "object"

// Problem 2
//   Code used in browsers
// // Function to perform addition
// function add(a, b) {
//     return a + b;
//   }
  
//   // Function to perform subtraction
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   // Function to perform multiplication
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   // Function to perform division
//   function divide(a, b) {
//     if (b === 0) {
//       return "Error: Division by zero is not allowed.";
//     }
//     return a / b;
//   }
  
//   // Getting input from the user
  
//   var num1 = parseInt("Enter the first number:");
//   var num2 = parseInt("Enter the second number:");
  
//   // Performing calculations
//   var sum = add(num1, num2);
//   var difference = subtract(num1, num2);
//   var product = multiply(num1, num2);
//   var quotient = divide(num1, num2);
  
//   // Displaying the results
//   console.log("Sum:", sum);
//   console.log("Difference:", difference);
//   console.log("Product:", product);
//   console.log("Quotient:", quotient);

// Problem 2
// const readline = require('readline');

// // Function to perform addition
// function add(a, b) {
//   return a + b;
// }

// // Function to perform subtraction
// function subtract(a, b) {
//   return a - b;
// }

// // Function to perform multiplication
// function multiply(a, b) {
//   return a * b;
// }

// // Function to perform division
// function divide(a, b) {
//   if (b === 0) {
//     return "Error: Division by zero is not allowed.";
//   }
//   return a / b;
// }

// // Create readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt user for the first number
// rl.question('Enter the first number: ', (num1) => {
//   // Prompt user for the second number
//   rl.question('Enter the second number: ', (num2) => {
//     // Convert input to integers
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);

//     // Performing calculations
//     var sum = add(num1, num2);
//     var difference = subtract(num1, num2);
//     var product = multiply(num1, num2);
//     var quotient = divide(num1, num2);

//     // Displaying the results
//     console.log("Sum:", sum);
//     console.log("Difference:", difference);
//     console.log("Product:", product);
//     console.log("Quotient:", quotient);

//     // Close the readline interface
//     rl.close();
//   });
// });



// // Problem 4
// // Declare an array
// const myArray = [1, 2, 3, 4, 5];

// // Function to print array values using a for loop
// function printArrayUsingForLoop(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// // Function to print array values using a while loop
// function printArrayUsingWhileLoop(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
//   }
// }

// // Call the functions to print the array values
// console.log("Printing array using for loop:");
// printArrayUsingForLoop(myArray);

// console.log("\nPrinting array using while loop:");
// printArrayUsingWhileLoop(myArray);



// Problem 5
// Declare an array
const myArray = [1, 2, 3, 4, 5];

// Function to calculate the sum using a for loop
function calculateSumUsingForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to calculate the sum using a while loop
function calculateSumUsingWhileLoop(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

// Call the functions to calculate the sum
console.log("Sum using for loop:", calculateSumUsingForLoop(myArray));
console.log("Sum using while loop:", calculateSumUsingWhileLoop(myArray));



  
