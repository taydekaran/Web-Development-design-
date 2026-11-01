//Objects in JavaScript
let person = {
  name: "John",
  age: 30,
  isStudent: true,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name);
person.greet();

// Basic Operations on JavaScript Objects

// Adding a new property
person.gender = "male";
console.log(person.gender); // Output: male

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined

// Iterating over object properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Creating a new object using Object.create()
let student = Object.create(person);
student.name = "Alice";
student.age = 22;
console.log(student.name);

// Creating a new object using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Bob", 25);
console.log(person1.name);
console.log(person1.age);

// Creating a new object using a class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

let animal1 = new Animal("Leo", "Lion");
console.log(animal1.name);
console.log(animal1.species);

// Creating a new object using Object.assign()
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// Creating a new object using the spread operator
let obj3 = { d: 5, e: 6 };
let mergedObj2 = { ...obj1, ...obj3 };
console.log(mergedObj2); // Output: { a: 1, b: 2, d: 5, e: 6 }

// Creating a new object using JSON.parse() and JSON.stringify()
let jsonString = '{"name": "Charlie", "age": 28}';
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name);

// Creating a new object using Object.fromEntries()
let entries = [['x', 10], ['y', 20]];
let objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries); // Output: { x: 10, y: 20 }  

