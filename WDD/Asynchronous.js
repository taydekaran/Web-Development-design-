// Approach 1: Using callback
// function myFunction(callback) {
//     setTimeout(() => {
//         const data = { name: "Aman", age: 21 };
//         callback(data);
//     }, 3000);
// }

// myFunction((data) => {
//     console.log("Data:", data);
// });

 // Approach 2: Using Promises
// function mydata() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: "Rohit", age: 23 };
//             resolve(data);
//         }, 2000);
//     });
// }

// mydata()
//     .then((data) => {
//         console.log("Data:", data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     }
//   )

//============================================================================

// console.log("one")
// console.log("two")
// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 2000) //time out 2second == 2000mili second

// console.log("three")
// console.log("four")

//callback
// A callback function is a function that is passed as an argument to another function and is executed later.

// function greeting(name) {
//     console.log("Hello " + name);
// }

// function user(callback) {
//     let name = "Karan";
//     callback(name);
// }

// user(greeting);

// callback hell  -> nested callback is called  callback hell
//call back couse problem to solve this problem we use promises
//what is promises
//what is promis chain
// Promise.resolve(10)
//     .then((result) => { 
//         console.log(result);
//         return result + 20;
//     })
//     .then((result) => {
//         console.log(result);
//         return result + 10;
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("success");
//     });

// function login() {
//     return Promise.resolve("Login Successful");
// }

// function getStudent() {
//     return Promise.resolve("Student Details Received");
// }

// function getCourses() {
//     return Promise.resolve("Courses Received");
// }

// login()
//     .then((result) => {
//         console.log(result);
//         return getStudent();
//     })
//     .then((result) => {
//         console.log(result);
//         return getCourses();
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//==============================================================================
//Async / await

// async function hello(){
//    console.log("hello");
// }


// ====================================

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wheather data");
            resolve(200)         
        }, 2000);
    })
}

async function wheatherdata(){
    await api();
}