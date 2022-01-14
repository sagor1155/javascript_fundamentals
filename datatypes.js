// variables: 
// primitive/value types - String, Number, Boolean, undefined, null
// Reference type - Objects, Array, Function 

// Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,
//valid
let a = 'hello';
let _a = 'hello';
let $a = 'hello';
//invalid
// let 1a = 'hello'; // this gives an error

// JavaScript is case-sensitive. So y and Y are different variables. For example,
let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5

// Keywords cannot be used as variable names. For example,
//invalid
// let new = 5; // Error! new is a keyword.

// The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,
const x = 5;
// Once a constant is initialized, we cannot change its value.

// primitive/value types
let name = 'Mosh'
let age = 30
let isApproved = false
let firstName = undefined
let lastName = null
let selectedColor = 'red'

//strings example
const name1 = 'ram';
const name2 = "hari";
const result = `The names are ${name1} and ${name2}`;

// +Infinity, -Infinity, NaN
const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN

// BigInt: A BigInt number is created by appending n to the end of an integer
const value1 = 900719925124740998n;
// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 


// typeof
console.log(typeof name) // string
// JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.
name = 123  
console.log(typeof name) // number

console.log(typeof age)
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof selectedColor)


// Reference type
// objects
let person = {
    name : 'Mosh',
    age : 30
}

console.log(person)
console.log(person.name) // dot notation
console.log(person.age)
console.log(person["name"]) // bracket notation 
console.log(person["age"])

// array: list of objects
let selectedColors = ['red', 'blue', 'green']
selectedColors[3] = 1 // array is dynamic in js
console.log(selectedColors)
console.log(selectedColors.length)
console.log(typeof selectedColors) // array is an object in js

// functions 
function square(number) {
    return number*number
}
console.log(square(4))
console.log(square.toString())  // function is an object in js 

let square2 = function(number) {
    return number*number
}
console.log(square2(4))
