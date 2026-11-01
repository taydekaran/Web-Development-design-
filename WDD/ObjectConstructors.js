//Object Constructors

function Person(name, age) {
  this.name = name;
  this.age = age; 
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person1 = new Person("Alice", 30);
person1.greet(); // Output: "Hello, my name is Alice and I am 30 years old."

