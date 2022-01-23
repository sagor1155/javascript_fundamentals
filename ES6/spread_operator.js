// spread operator (...) is used to expand or spread an iterable or an array
const arrValue = ['My', 'name', 'is', 'Jack'];
console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// Copy Array Using Spread Operator
const ar1 = ['one', 'two'];
const ar2 = [...ar1, 'three', 'four']
console.log(ar2)

// Clone Array Using Spread Operator
// if you want to copy arrays 
// so that they do not refer to the same array, you can use the spread operator.
let arr1 = [ 1, 2, 3];

// copy using spread syntax
let arr2 = [...arr1];

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to the array
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]


// Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

const obj3 = {...obj1, ...obj2}
console.log(obj3)


// Rest Parameter
// When the spread operator is used as a parameter, it is known as the rest parameter.
// You can also accept multiple arguments in a function call using the rest parameter. For example,
// Using the rest parameter will pass the arguments as array elements.
let func = function(...args) {
    console.log(args)
}

func(3)
func(4, 5, 6)

// You can also pass multiple arguments to a function using the spread operator.
function sum(x, y ,z) {
    console.log(x + y + z);
}
const num1 = [1, 3, 4, 5]
sum(...num1) // 8