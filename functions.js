// return multiple values
// JavaScript doesn’t support functions that return multiple values. 
// However, you can wrap multiple values into an array or an object and return the array or the object.

function getNames() {
    // get names from the database or API
    let firstName = 'John', lastName  = 'Doe'
    return { firstName, lastName } // object 
}

person = getNames()
console.log(person.firstName)
console.log(person.lastName)

// or, 
let { firstN, lastN } = getNames();

