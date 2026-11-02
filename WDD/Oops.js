// Object Oriented Programming in JavaScript
//01 Improves code reusability
//02 Enhances maintainability and scalability
//03 Makes programs easier to understand and manage
//04 Closely models real-world entities

// Creating a class
class Student {
    constructor(name, age) { // Constructor method to initialize properties
        this.name = name;   // Assigning the name parameter to the name property of the object
        this.age = age;     // Assigning the age parameter to the age property of the object
    }  

    displayInfo() {  // Method to display the student's information
        console.log("Name:", this.name);   // Accessing the name property of the object
        console.log("Age:", this.age);    // Accessing the age property of the object
    }
}

// Creating an object
const student1 = new Student("Rahul", 20);  // Creating a new instance (object) of the Student class with name "Rahul" and age 20

// Calling method
student1.displayInfo();  // Calling the displayInfo method on the student1 object to print its information

//Characteristics of OOP
//00 objects and Classes
//01 Encapsulation
//example of encapsulation
console.log("Encapsulation");
class Student {
    constructor() {
        // Initialize the property
        this._name = "";
    }
    // Method to set the name
    setName(name) {
        this._name = name;
    }
    // Method to get the name
    getName() {
        return this._name;
    }
}
// Create an object
let student = new Student();
// Set the name
student.setName("Rahul");
// Print the name
console.log(student.getName());

// Using Closures
console.log("Encapsulation Using Closures");
function BankAccount(accNum, accHolder, balance) {
    let _accNum = accNum;
    let _accHolder = accHolder;
    let _balance = balance;

    function showAccountDetails() {
        console.log(`Account Number: ${_accNum}`);
        console.log(`Account Holder Name: ${_accHolder}`);
        console.log(`Balance: ${_balance}`);
    }

    function deposit(amount) {
        _balance += amount;
        showAccountDetails();
    }

    function withdraw(amount) {
        if (_balance >= amount) {
            _balance -= amount;
            showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }

    return {
        deposit,
        withdraw
    };
}

const myBankAccount = BankAccount(
    "123456",
    "John Doe",
    1000
);

myBankAccount.deposit(500);
myBankAccount.withdraw(2000);


//Using Private Fields (#)
console.log("using private field");

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance());

//02 Inheritance
// example 
// 1. prototype-based inheritance
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name) {
    Animal.call(this, name); // Inherit properties
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks: Woof!`);
};

// Creating an instance
const myDog = new Dog("Buddy");

myDog.speak(); 
myDog.bark();

// 2. ES6 Class-based Inheritance
class one {
    constructor(name) {
        this.name = name
    }
    speaks() {
        return `my name is ${this.name}`
    }
}
class two extends one {
    constructor(name) {
        super(name)
    }
}
const o = new two('Pranjal')
console.log(o.speaks())

// 3. Mixins
const one = {
    speak() {
        return `${this.name} walks`
    }
}
const two = {
    walks() {
        return `${this.name} walks`
    }
}
function Person(name) {
    this.name = name
}
Object.assign(Person.prototype, one, two)
const person1 = new Person('Pranjal')
console.log(person1.speak())
console.log(person1.walks())

// 4. Inheritance with Object.create()
let obj = {
    name: 'Pranjal',
    age: 21,
    prints() {
        return `my name is ${this.name}`
    }
}
let obj1 = Object.create(obj)
obj1.name = 'Hello'
console.log(obj1.age)
console.log(obj1.prints())


//03 Polymorphism
//Method Overriding:
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
dog.speak(); 

const cat = new Cat();
cat.speak();
// Method Overloading
class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a; 
        }
        return a + b; 
    }
}

const calc = new Calculator();
console.log(calc.add(2)); 
console.log(calc.add(2, 3)); 
//04 Abstraction
class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        this.#brewCoffee();

        console.log("Coffee is ready!");
    }

    #boilWater() {
        console.log("Boiling water...");
    }

    #brewCoffee() {
        console.log("Brewing coffee...");
    }
}

const coffee = new CoffeeMachine();
coffee.makeCoffee();


