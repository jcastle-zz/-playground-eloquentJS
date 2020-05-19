console.log("here");


// // Add to chapter on objects

// // 1. Object constructor
// let obj = new Object();

// // 2. Object's create method
// // let obj = new Object.create(obj);

// // 3. Object literal syntax
// let obj = {};

// // 4. Function constructor
// function employee(name){
//     let obj = {};
//     name;
//     obj.age = 18;
//     obj.salary = 40000;
//     return obj;
// }
// let obj = new employee('Don');

// // 5. Function constructor with prototype
// function Employee() {
//     Employee.prototype.name = "Dom";
//     let object = new Employee();
// }

// // 6. ES6 Class syntax
// class Employee {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let obj = new Employee("Don");

// // 7. Singleton pattern
// let object = new (function () {
//     this.name = "Don";
//     })();