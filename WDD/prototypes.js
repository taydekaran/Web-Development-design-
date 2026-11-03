// let student = {
//     name: "Karan",
//     age: 22
// };

// console.log(student.name);
// console.log(student.age); 


// let student = {
//     name: "Karan"
// };

// console.log(student.toString());
// console.log(student.hasOwnProperty("name"));

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greeting = function() {
    console.log("Hello " + this.name);
};

let student1 = new Student("Karan", 22);
let student2 = new Student("Rahul", 21);

student1.greeting();
student2.greeting();