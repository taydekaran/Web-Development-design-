// Arrays : In JavaScript, an array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index.

// The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.

// Arrays can hold any type of data-such as numbers, strings, objects, or even other arrays-making them a flexible and essential part of JavaScript programming.
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // output: apple
console.log(fruits[1]); // output: banana
console.log(fruits[2]); // output: orange

// Array Methods
// push() - adds an element to the end of the array
fruits.push("grape");
console.log(fruits); // output: ["apple", "banana", "orange", "grape"]

// pop() - removes the last element from the array
fruits.pop();
console.log(fruits); // output: ["apple", "banana", "orange"]

// shift() - removes the first element from the array
fruits.shift();
console.log(fruits); // output: ["banana", "orange"]

// unshift() - adds an element to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits); // output: ["kiwi", "banana", "orange"]

// indexOf() - returns the index of the first occurrence of an element
let index = fruits.indexOf("banana");
console.log(index); // output: 1

// slice() - returns a shallow copy of a portion of an array
let citrus = fruits.slice(1, 3);
console.log(citrus); // output: ["banana", "orange"]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, "mango");
console.log(fruits); // output: ["kiwi", "mango", "orange"] 

// forEach() - executes a provided function once for each array element
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// output:
// kiwi
// mango
// orange

// Array Concatenation
let moreFruits = ["pineapple", "strawberry"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // output: ["kiwi", "mango", "orange", "pineapple", "strawberry"]



// map() - creates a new array with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(upperFruits); // output: ["KIWI", "MANGO", "ORANGE"]

// filter() - creates a new array with all elements that pass the test implemented by the provided function
let longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log(longFruits); // output: ["orange"]

// reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let totalLength = fruits.reduce(function(accumulator, fruit) {
  return accumulator + fruit.length;
}, 0);
console.log(totalLength); // output: 14

// find() - returns the value of the first element in the array that satisfies the provided testing function
let foundFruit = fruits.find(function(fruit) {
  return fruit.startsWith("m");
}); 
console.log(foundFruit); // output: "mango"

// findIndex() - returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = fruits.findIndex(function(fruit) {
  return fruit.startsWith("m");
});
console.log(foundIndex); // output: 1

// includes() - determines whether an array includes a certain value among its entries
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // output: false

// sort() - sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log(fruits); // output: ["kiwi", "mango", "orange"]

// reverse() - reverses the order of the elements of an array in place
fruits.reverse();
console.log(fruits); // output: ["orange", "mango", "kiwi"]

// join() - joins all elements of an array into a string
let fruitString = fruits.join(", ");
console.log(fruitString); // output: "orange, mango, kiwi"

// Array Destructuring
let [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // output: "orange"
console.log(secondFruit); // output: "mango"
console.log(thirdFruit); // output: "kiwi"

// Array Spread Operator
let moreFruits2 = ["grape", "pear"];
let allFruits2 = [...fruits, ...moreFruits2];
console.log(allFruits2); // output: ["orange", "mango", "kiwi", "grape", "pear"]

// Array.from() - creates a new array instance from an array-like or iterable object
let str = "hello";
let strArray = Array.from(str);
console.log(strArray); // output: ["h", "e", "l", "l", "o"] 

// Array.isArray() - determines whether the passed value is an array
console.log(Array.isArray(fruits)); // output: true

// Array.of() - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
let numArray = Array.of(1, 2, 3);
console.log(numArray); // output: [1, 2, 3] 

// Array.prototype - allows you to add new methods to all array instances
Array.prototype.last = function() {
  return this[this.length - 1];
} 
// example
console.log(fruits.last()); // output: "kiwi"

// Array.prototype.first = function() {
//   return this[0];
// } 
// example
console.log(fruits.first()); // output: "orange"  

// Array.prototype.remove = function(value) {
//   let index = this.indexOf(value);
//   if (index > -1) {  
    this.splice(index, 1);

// example
fruits.remove("mango");
console.log(fruits); // output: ["orange", "kiwi"]  

// Array.prototype.clear = function() {
  this.length = 0;  
// example
fruits.clear();
console.log(fruits); // output: []

