// const name = "karan"

// const greet =() => {
//   return `hello${name}`
// }
// console.log(greet())

// var n = 5;
// console.log(n);

// var n = 10;    //reassignment is allowed with var
// console.log(n);

//let keyword is introduced in ES6 and it is block scoped. It means that the variable declared with let is only accessible within the block in which it is defined.

// let n = 5;
// let n = 10; // This will throw an error because n has already been declared in the same scope
// n = 10;
// console.log(n); // Output: 10

// const Keyword

// const n = 5;
// const n = 10; // This will throw an error because n has already been declared in the same scope
// n = 10; 
// console.log(n); // Output: 10

// // datatypes in javascript
// // numeric, string, boolean, null, undefined, object, symbol
// let n = 42;
// let pi = 3.14;

// string
let name = "karan";

// boolean
let bool = true;

// null
let empty = null;
// undefined
let notDefined; // variable declared but not assigned a value

// symbol
let sym = Symbol('unique');

// bigint
let bigNumber = 123456789012345678901234567890n;
// =============================================================

// non-primitive data types in javascript
// object, array, function

// object
let person = {
  name: "karan",
  age: 25,
  isStudent: true
};
console.log(person.name); // Output: karan
console.log(person.age); // Output: 25
console.log(person.isStudent); // Output: true
console.log(person); // Output: { name: 'karan', age: 25, isStudent: true }

// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("karan"));
console.log(greet("John"));

// JavaScript Operators

// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50    
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
console.log(a ** b); // Output: 100000
console.log(a++); // Output: 10 (post-increment)
console.log(++a); // Output: 12 (pre-increment)
console.log(a--); // Output: 12 (post-decrement)
console.log(--a); // Output: 10 (pre-decrement)

// Assignment Operators
let x = 10;
x += 5;
console.log(x); // Output: 15
x -= 3;
console.log(x); // Output: 12
x *= 2;
console.log(x); // Output: 24
x /= 4;
console.log(x); // Output: 6
x %= 4;
console.log(x); // Output: 2
x **= 3;
console.log(x); // Output: 8
x++; // Increment by 1
console.log(x); // Output: 9
x--; // Decrement by 1
console.log(x); // Output: 8  
x = 10; // Reset x to 10
console.log(x); // Output: 10

// Comparison Operators
console.log(a == b); // Output: false  , checks only value
console.log(a != b);  // Output: true , checks only value   
console.log(a === b); // Output: false , checks value and type
console.log(a !== b); // Output: true , checks value and type
console.log(a > b); // Output: true , checks if a is greater than b
console.log(a < b); // Output: false , checks if a is less than b
console.log(a >= b);    // Output: true , checks if a is greater than or equal to b
console.log(a <= b); // Output: false , checks if a is less than or equal to b

// Logical Operators
let p = true;
let q = false;
console.log(p && q); // Output: false , logical AND , checks if both p and q are true
console.log(p || q); // Output: true , logical OR , checks if either p or q is true
console.log(!p); // Output: false , logical NOT   , checks if p is not true
console.log(!q); // Output: true , logical NOT , checks if q is not true
console.log(p && !q); // Output: true , logical AND with NOT , checks if p is true and q is not true
console.log(!p || q); // Output: false , logical OR with NOT , checks if p is not true or q is true
console.log((p && q) || (!p && !q)); // Output: false , logical AND and OR combined , checks if both p and q are true or both p and q are false
console.log((p || q) && (!p || !q)); // Output: true , logical OR and AND combined , checks if either p or q is true and either p or q is not true
console.log((p && !q) || (!p && q)); // Output: true , logical AND and OR combined ,  checks if p is true and q is not true or p is not true and q is true
console.log((p || !q) && (!p || q)); // Output: true , logical OR and AND combined , checks if either p is true or q is not true and either p is not true or q is true
console.log((p && q) || (p && !q) || (!p && q)); // Output: true , logical AND and OR combined , checks if either p and q are true or p is true and q is not true or p is not true and q is true
console.log((p || q) && (p || !q) && (!p || q)); // Output: true , logical OR and AND combined , checks if either p or q is true and either p or q is not true and either p is not true or q is true
console.log((p && q) || (p && !q) || (!p && q) || (!p && !q)); // Output: true , logical AND and OR combined , checks if any of the combinations are true
console.log((p || q) && (p || !q) && (!p || q) && (!p || !q)); // Output: true , logical OR and AND combined , checks if all combinations are true
console.log((p && q) || (p && !q) || (!p && q) || (!p && !q) || (p && q)); // Output: true , logical AND and OR combined , checks if any of the combinations are true

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes  , checks if age is greater than or equal to 18, if true returns "Yes", else returns "No"
canVote = (age < 18) ? "No" : "Yes";
console.log(canVote); // Output: Yes , checks if age is less than 18, if true returns "No", else returns "Yes"

// typeof operator
console.log(typeof a); // Output: number , checks the type of variable a
console.log(typeof name); // Output: string , checks the type of variable name
console.log(typeof age); // Output: number , checks the type of variable age

// instanceof operator
console.log(person instanceof Object);// Output: true , checks if person is an instance of Object
console.log(numbers instanceof Array);// Output: true , checks if numbers is an instance of Array

// Bitwise Operators
console.log(a & b); // Output: 0 , bitwise AND , performs AND operation on each bit
console.log(a | b); // Output: 3 , bitwise OR , performs OR operation on each bit
console.log(a ^ b); // Output: 3 , bitwise XOR , performs XOR operation on each bit
console.log(~a); // Output: -4 , bitwise NOT , inverts all bits
console.log(a << 1); // Output: 4 , left shift , shifts bits to the left
console.log(a >> 1); // Output: 1 , right shift , shifts bits to the right
console.log(a >>> 1); // Output: 1 , zero-fill right shift , shifts bits to the right and fills with zeros

// String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Output: Hello World , concatenates str1 and str2 with a space in between
console.log(str1 += " " + str2); // Output: Hello World , concatenates str1 and str2 with a space in between and assigns it to str1

// Comma Operator
let x = (5, 10); // Output: 10 , evaluates both expressions and returns the value of the last expression
console.log(x); // Output: 10

// Relational Operators
const obj = { length: 10 };
console.log("length" in obj); // Output: true , checks if the property "length" exists in obj
console.log([] instanceof Array); // Output: true , checks if [] is an instance of Array


