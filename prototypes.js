/* 
    REF: https://www.programiz.com/javascript/prototype
*/

// every function and object has a property named prototype by default.
function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }


// Prototype Inheritance
// a prototype can be used to add properties and methods to a constructor function
// And objects inherit properties and methods from a prototype

let person1 = new Person();
let person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);


// Changing Prototype
// If a prototype value is changed, then all the new objects will have the changed property value. 
// All the previously created objects will have the previous value.

// creating an object
person1 = new Person();

// add a property
Person.prototype.height = 5.6;

console.log(person1.height); // 5.6

// changing property 
Person.prototype = {height: 6}

// new object
person2 = new Person()

console.log(person1.height) // 5.6
console.log(person2.height) // 6


// prototype chaining 
// If an object tries to access the same property that is in the constructor function and the prototype object, 
// the object takes the property from the constructor function. 

person1 = new Person()
console.log(person1.name) // John
// adding property 
Person.prototype.name = 'Peter'
console.log(person1.name) // John
// You can also access the prototype property of a constructor function from an object.
person1.__proto__.abc  = 12
console.log(Person.prototype)
console.log(person1.__proto__)
console.log(person2.__proto__)
// In the above example, a person object is used to access the prototype property using __proto__. 
// However, __proto__ has been deprecated and you should avoid using it.