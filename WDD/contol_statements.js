// if Statement
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
// example
if (a > b) {
  console.log("a is greater than b");
} 
// output: a is greater than b
// if...else Statement

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
} 
// output: a is greater than b
// if...else if...else Statement

if (a > b) {  
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// output: a is greater than b

// Switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// output: Wednesday

// Ternary Operator
let result = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(result); 
// output: a is greater than b

// Loops
// for Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// output: 0 1 2 3 4

// while Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
// output: 0 1 2 3 4

// do...while Loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);  
// output: 0 1 2 3 4

