// used to assign array values and object properties to distinct variables

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let {name, age, gender} = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
// When destructuring objects, you should use the same name for the variable as the corresponding object key.
// The order of the name does not matter in object destructuring.
// you could write the above program as:
let {age: age1, gender: gender1, name: name1} = person; // different order, different variable name
console.log(name1); // Sara


// Array Destructuring
const arrValue = ['one', 'two', 'three'];

let [x, y, z] = arrValue;
console.log(x, y, z)

// assign default values
let arrValue2 = [10];
// assigning default value 5 and 7
let [x2 = 5,  y2 = 7] = arrValue2;
console.log(x2, y2)

// Swapping Variables
let x3 = 4;
let y3 = 7;
[x3, y3] = [y3, x3];
console.log(x3, y3)

// Skip Items
let [x4, , z4] = arrValue;
console.log(x4, z4)

// Assign Remaining Elements to a Single Variable
// assigning remaining elements to y5
const [x5, ...y5] = arrValue;
console.log(x5, y5)

let { name: name2, ...rest } = person;
console.log(name2, rest)

// Nested Destructuring Assignment
// nested array elements
const arrValue3 = ['one', ['two', 'three']];
const [x6, [y6, z6]] = arrValue3;
console.log(x6, y6, z6)

// nested object elements 
const person2 = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}

const {name: name3, age: age3, hobbies: {read, playGame}} = person2
console.log(name3, age3, read, playGame)

