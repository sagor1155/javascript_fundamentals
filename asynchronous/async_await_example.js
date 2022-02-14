/** Async function
 * runs asynchronously, non-blocking 
 * await used inside async function
 * returns promise 
 */

async function getTodos() {
    let response = await fetch('todos/todos_lucy.json')    // await blockes code below 
    let data = await response.json()
    return data
}

console.log(1)
console.log(2)

// runs asynchronously, doesn't block the codes below 
getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log(3)
console.log(4)
