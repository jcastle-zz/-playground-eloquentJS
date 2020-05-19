// Add to chapter on objects

// 1. Object constructor
let obj1 = new Object();

// 2. Object's create method
// let obj2 = new Object.create(obj);

// 3. Object literal syntax
let obj3 = {};

// 4. Function constructor
function employee1(name){
    let obj = {};
    name;
    obj.age = 18;
    obj.salary = 40000;
    return obj;
}
let obj = new employee1('Don');

// 5. Function constructor with prototype
function Employee1() {
    Employee.prototype.name = "Dom";
    let object = new Employee();
}

// 6. ES6 Class syntax
class Employee2 {
    constructor(name) {
        this.name = name;
    }
}
let obj4 = new Employee2("Don");

// 7. Singleton pattern
let object = new (function () {
    this.name = "Don";
    })();