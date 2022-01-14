// return multiple values
// JavaScript doesn’t support functions that return multiple values. 
// However, you can wrap multiple values into an array or an object and return the array or the object.

function getNames() {
    // get names from the database or API
    let firstName = 'John', lastName  = 'Doe'
    return { firstName, lastName } // object 
}

let p = getNames()
console.log(p.firstName)
console.log(p.lastName)

// or, 
let { firstN, lastN } = getNames();

// constructor function 
// a constructor function is used to create objects
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();