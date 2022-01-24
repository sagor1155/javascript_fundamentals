// Set is similar to an array that allows us to store multiple items 
// like numbers, strings, objects, etc. 
// However, unlike an array, a set cannot contain duplicate values.
 
const set1 = new Set([1, 'hello', {count: true}]);
console.log(set1)

// Set with duplicate values
const set2 = new Set([1, 1, 2, 2]);
console.log(set2); // Set {1, 2}

// Access Set Elements
console.log(set1.values())

// check if an element is in Set
console.log(set1.has(1));

// Adding New Elements
set1.add(3)
console.log(set1)

// Removing Elements
set1.delete(3)
console.log(set1)
set1.clear()
console.log(set1)

// Iterate Sets
const set = new Set([1, 2, 3]);

for (let item of set) {
    console.log(item)
}