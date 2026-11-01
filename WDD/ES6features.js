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

const n = 5;
const n = 10; // This will throw an error because n has already been declared in the same scope
n = 10; 
console.log(n); // Output: 10

// datatypes in javascript
// numeric, string, boolean, null, undefined, object, symbol
let n = 42;
let pi = 3.14;

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
