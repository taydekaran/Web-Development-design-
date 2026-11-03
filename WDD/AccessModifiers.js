// Types of Access Modifiers
// Public (default)
// Private
// Protected


//public Access Modifier
class Person {
    constructor(name) {
        this.name = name; // Public member
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person('Alice');
person.introduce(); // Accessing a public method
console.log(person.name); // Accessing a public property

// Private Access Modifier (#)
class Person {
    #name; // Private member

    constructor(name) {
        this.#name = name;
    }

    #sayHello() {
        console.log(`Hello, my name is ${this.#name}.`);
    }

    introduce() {
        // Accessing a private method
        this.#sayHello();
    }
}

const person = new Person('Bob');
// Accessing a public method that 
// accesses a private method
person.introduce();

// Error: Private member is not accessible
console.log(person.#name);


// Protected Access Modifier
class Vehicle {
    constructor(speed) {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
        this._speed = speed;
    }
}

class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    getSpeed() {
        // Accessing the protected member in a subclas (_)
        return this._speed; 
    }
}

const myCar = new Car(60);
console.log(myCar.getSpeed()); // Outputs: 60
console.log(myCar._speed); // Outputs: 60

