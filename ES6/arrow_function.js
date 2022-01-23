// Arrow function
/* Syntax:  
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

If the body has single statement, you can write arrow function as:
let myFunction = (arg1, arg2, ...argN) => expression
*/

// arrow function with no argument 
let greet = () => console.log('Hello');
greet();

// arrow function with one argument 
greet = (name) => console.log(`Hello ${name}`);
greet('John');

// arrow function as an expression 
let age = 5;
let welcome = (age < 18) ? 
    () => console.log('Baby') : 
    () => console.log('Adult');

welcome()

// multiline arrow function 
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result = sum(5, 7)
console.log(result)

// this with arrow function
// Inside a regular function
/*
function Person() {
    this.name  = 'Jack',
    this.age = 25,
    this.sayName = function () {
        console.log(this.age); // this is accessible

        function innerFunction() {
            console.log(this.age); // this.age not accessible, this referes to the global object
        }

        innerFunction();
    }
}
*/

// Inside an arrow function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age); // this.age accessible
        }

        innerFunc();
    }
}

let p = new Person();
p.sayName()

// arguments binding
// Regular functions have arguments binding.
let x = function () {
    console.log(arguments);
}
x(4,6,7); // Arguments [4, 6, 7]

// Arrow functions do not have arguments binding.
// let y = () => {
//     console.log(arguments);
// }
// y(4,6,7); // ReferenceError: arguments is not defined 


// To solve this issue, you can use the spread syntax. For example,
let y = (...n) => {
    console.log(n);
}

y(4,6,7); // [4, 6, 7]

// Arrow Function with Promises and Callbacks
// Arrow functions provide better syntax to write promises and callbacks.
// ES5
// asyncFunction().then(function() {
//     return asyncFunction1();
// }).then(function(){
//     return asyncFunction2()
// }).then(function(){
//     finish;
// });

// ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish());

// Things You Should Avoid With Arrow Functions
// 1. You should not use arrow functions to create methods inside objects.
// 2. You cannot use an arrow function as a constructor. 
