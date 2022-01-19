let arr = [1, 2, 3]

// array length
console.log(arr.length)

// push elements
arr.push(4)
console.log(arr)

// add elements at the start 
arr.unshift(0)
console.log(arr)

// remove last element 
arr.pop()
console.log(arr)

// remove first element 
arr.shift()
console.log(arr)

/*
Some of the commonly used JavaScript array methods are:

Method	    Description
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	    returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	    aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	    removes the last element of an array and returns the removed element
shift()	    removes the first element of an array and returns the removed element
sort()	    sorts the elements alphabetically in strings and in ascending order
slice()	    selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
entries()   returns a new Array Iterator object that contains the key/value pairs for each index in the array.

*/

// concat 
arr = arr.concat([55, 66], [77, 88])
console.log(arr) 

// indexOf
console.log(arr.indexOf(77))

// find
// The find() method returns the value of the first element in the provided array 
// that satisfies the provided testing function
const found = arr.find(elem => elem > 10)
console.log(found)

// findIndex
const foundIndex = arr.findIndex(elem => elem > 10)
console.log(foundIndex)

// attach callback to find() function 
function isGreaterThanTen(number){
    return number > 10
}
console.log(arr.find(isGreaterThanTen))

// entries: returns array iterator object 
const iterator1 = arr.entries();
console.log(iterator1.next().value) // [0, 1] returns key/value ([index, value]) pair for next element 
console.log(iterator1.next().value) // [1, 2]
console.log(iterator1.next().value) // [2, 3]
console.log(iterator1.next().value) // [3, 55]
console.log(iterator1.next().value) // [4, 66]

// slice: slice(), slice(start), slice(start, end)
let slicedArr = arr.slice(2, 5)
console.log("Original array: " + arr)
console.log("Sliced array: " + slicedArr)
slicedArr[0] = 99
console.log("Sliced array: " + slicedArr)
console.log("Original array: " + arr)


/*
Working of JavaScript Arrays
----------------------------
In JavaScript, an array is an object. And, the indices of arrays are objects keys.
Since arrays are objects, the array elements are stored by reference. 
Hence, when an array value is copied, any change in the copied array will also reflect 
in the original array.
*/

let arr2 = ['h', 'e'];
let arr3 = arr2;
arr3.push('l');

console.log(arr2); // ["h", "e", "l"]
console.log(arr3); // ["h", "e", "l"]