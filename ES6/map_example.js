// Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.
// create map
const map1 = new Map(); // an empty map
console.log(map1)

// Insert Item to Map
map1.set('info', {name: "Jack", age: 30})
console.log(map1)

// object can be set as map key 
let obj = {}
map1.set(obj, {name: "John", age: 30})
console.log(map1)

// size
console.log(map1.size) // number of entries/elements

// access map elements
console.log(map1.get('info'))

// check map elements
console.log(map1.has('info'))

// delete elements
map1.delete(obj)
console.log(map1)

// removing all element
map1.clear();

// iterate through a map
map1.set('name', 'Jack');
map1.set('age', '27');

for (let [key, value] of map1) {
    console.log(key + ": " + value)
}

// using forEach method
map1.forEach(function(key, value) {
    console.log(key + ": " + value)
})

// Iterate Over Map Values
for (let value of map1.values()){
    console.log(value)
}

// Get Key/Values of Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`)
}

