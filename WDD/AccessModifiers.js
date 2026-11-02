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

// Private Access Modifier


