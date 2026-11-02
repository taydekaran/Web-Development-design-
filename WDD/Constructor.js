// 01  Object.create() function in JavaScript
const obj={
    name:'Pranjal',
    age:21
}
const obj1=Object.create(obj)
obj1.class='10th'
console.log(obj1.name)

//02 Constructor with default values
function Person(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Pranjal", 30);
const person2 = new Person("Amar");  
const person3 = new Person();  

console.log(person1);  
console.log(person2); 
console.log(person3);

//03 Constructor with method on Prototypes

