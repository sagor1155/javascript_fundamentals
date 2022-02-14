/** Async function
 * runs asynchronously, non-blocking 
 * await used inside async function
 * returns promise 
 */

async function getTodos() {
    try {
        let response = await fetch('todos/todos_luc.json')    // await blockes code below 
        let data = await response.json()
        return data
    } catch(err){
        throw new Error("Can't fetch the data")
    }
}

console.log(1)
console.log(2)

// runs asynchronously, doesn't block the codes below 
getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))

console.log(3)
console.log(4)
