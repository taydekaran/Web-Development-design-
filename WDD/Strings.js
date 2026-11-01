// Strings
let greeting = "Hello, World!";
console.log(greeting.length); // Output: 13
console.log(greeting.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(greeting.toLowerCase()); // Output: "hello, world!"
console.log(greeting.charAt(0)); // Output: "H"
console.log(greeting.indexOf("World")); // Output: 7
console.log(greeting.slice(0, 5)); // Output: "Hello"   

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// Template Literals
let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log(message); // Output: "My name is John Doe and I am 30 years old."   

// String Methods
let str = "JavaScript is awesome!";
console.log(str.includes("awesome")); // Output: true
console.log(str.startsWith("Java")); // Output: true    
console.log(str.endsWith("!")); // Output: true
console.log(str.replace("awesome", "fantastic")); // Output: "JavaScript is fantastic!"
console.log(str.split(" ")); // Output: ["JavaScript", "is", "awesome!"]
console.log(str.trim()); // Output: "JavaScript is awesome!" (removes whitespace from both ends)
console.log(str.repeat(2)); // Output: "JavaScript is awesome!JavaScript is awesome!" (repeats the string 2 times)
console.log(str.substring(0, 10)); // Output: "JavaScript" (extracts characters from index 0 to 10)
console.log(str.toLowerCase()); // Output: "javascript is awesome!" (converts to lowercase)
console.log(str.toUpperCase()); // Output: "JAVASCRIPT IS AWESOME!" (converts to uppercase)
console.log(str.charAt(5)); // Output: "S" (returns the character at index 5)
console.log(str.charCodeAt(5)); // Output: 83 (returns the Unicode of the character at index 5)
console.log(str.concat(" Let's learn more.")); // Output: "JavaScript is awesome! Let's learn more." (concatenates strings)
console.log(str.match(/is/g)); // Output: ["is"] (returns an array of matches for the regex)
console.log(str.search("awesome")); // Output: 14 (returns the index of the first match)

// String Comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 === str2); // Output: false (strict equality comparison)
console.log(str1 !== str2); // Output: true (strict inequality comparison)  

// String Immutability
let originalString = "Hello";
let modifiedString = originalString.replace("H", "J");
console.log(originalString); // Output: "Hello" (original string remains unchanged)
console.log(modifiedString); // Output: "Jello" (new string with the modification)

// String Iteration
let st = "Hello";
for (let char of st) {
  console.log(char);
}
// output:
// H
// e
// l
// l
// o

// String Padding
let paddedString = "5".padStart(3, "0");
console.log(paddedString); // Output: "005" (pads the string with leading zeros to a total length of 3) 

// String Repetition
let repeatedString = "abc".repeat(3);
console.log(repeatedString); // Output: "abcabcabc" (repeats the string 3 times)  

// String Template Literals with Expressions
let x = 10;
let y = 20;
let sumMessage = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sumMessage); // Output: "The sum of 10 and 20 is 30."

// String Escape Sequences
let escapeString = "This is a line.\nThis is another line.\tThis is tabbed.";
console.log(escapeString);  
// Output:
// This is a line.
// This is another line.    This is tabbed.


// String Methods for Searching
let searchString = "The quick brown fox jumps over the lazy dog.";
console.log(searchString.indexOf("fox")); // Output: 16 (returns the index of the first occurrence of "fox")
console.log(searchString.lastIndexOf("the")); // Output: 31 (returns the index of the last occurrence of "the")     

// String Methods for Extracting
let extractString = "JavaScript is fun!";
console.log(extractString.slice(0, 10));
// Output: "JavaScript" (extracts characters from index 0 to 10)
console.log(extractString.substring(0, 10));
// Output: "JavaScript" (extracts characters from index 0 to 10)



