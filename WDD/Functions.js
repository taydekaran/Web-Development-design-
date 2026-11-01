// Functions
function greet(name) {   // 'name' is a parameter
  return `Hello, ${name}!`; 
}
console.log(greet("Alice")); // Output: "Hello, Alice!" (argument "Alice" is passed to the function)

//Default Parameters
function greet(name = "World") {   // 'name' has a default value of "World"
  return `Hello, ${name}!`; 
}
console.log(greet()); // Output: "Hello, World!" (no argument passed, so default value is used)
console.log(greet("Bob")); // Output: "Hello, Bob!" (argument "Bob" is passed to the function)

//Return Statement
function add(a, b) {
  return a + b; // returns the sum of a and b
} 
console.log(add(5, 3)); // Output: 8

//Types of Functions

//1. Named Function
function multiply(a, b) {
  return a * b; // returns the product of a and b
}
console.log(multiply(4, 6)); // Output: 24

//2. Anonymous Function
let divide = function(a, b) {
  return a / b; // returns the quotient of a and b
};
console.log(divide(12, 4)); // Output: 3

//3. Function Expression
let square = function(a) {
  return a * a; // returns the square of a
};
console.log(square(5)); // Output: 25

//4. Arrow Function
let subtract = (a, b) => a - b; // returns the difference of a and b
console.log(subtract(10, 4)); // Output: 6  

//5. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This function runs immediately!"); // Output: "This function runs immediately!"
}());

//6. Callback Functions
function processUserInput(callback) {
  let name = "John";
  callback(name); // calls the callback function with the name
}

processUserInput(function(name) {
  console.log(`Hello, ${name}!`); // Output: "Hello, John!"
});

// 7. Constructor Function
function Person(name, age) {
  this.name = name; 
  this.age = age;
  this.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

let person1 = new Person("Alice", 30);
console.log(person1.greet()); // Output: "Hello, my name is Alice and I am 30 years old." 

// 8. Recursive Function
function factorial(n) {
  if (n === 0) {  
    return 1; // base case
  } else {
    return n * factorial(n - 1); // recursive case
  }
}
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)

// 9. Async Function
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data)); // Output: data from the API (if successful)

// 10. Generator Function
function* generatorFunction() {
  yield 1; // yields the value 1
  yield 2; // yields the value 2
  yield 3; // yields the value 3
}

let generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value);  // Output: 2
console.log(generator.next().value);  // Output: 3  

// 10.  Higher-Order Function
function higherOrderFunction(callback) {
  let value = 10;
  return callback(value); // calls the callback function with the value
}
callbackFunction = function(num) {
  return num * 2; // returns the double of the number
} 

// 11. Nested Functions
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outer function's variable
  }

  innerFunction(); // Calling the nested function
}

outerFunction(); // Calling the outer function

// 12. Pure Functions
function pureFunction(x, y) {
  return x + y; // Always returns the same output for the same input
}
console.log(pureFunction(5, 3)); // Output: 8
console.log(pureFunction(5, 3)); // Output: 8 (same output for same input)

// 13. Impure Functions
let globalVariable = 10;
function impureFunction(x) {
  globalVariable += x;
  return globalVariable; // Output depends on external state (globalVariable)
}

console.log(impureFunction(5)); // Output: 15
console.log(impureFunction(5)); // Output: 20 (output changes based on previous calls)  

// 14. Rest Parameter Function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15  

// 15. Function Hoisting
hoistedFunction(); // Output: "This function is hoisted!" 

function hoistedFunction() {
  console.log("This function is hoisted!");
}


