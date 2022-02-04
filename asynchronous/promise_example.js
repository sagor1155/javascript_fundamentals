/*
A promise is a good way to handle asynchronous operations. 
It is used to find out if the asynchronous operation is successfully completed or not.
A promise may have one of three states.
    1. Pending
    2. Fulfilled
    3. Rejected
A promise starts in a pending state. That means the process is not complete. 
If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.
*/

function getTodos(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            }else if(request.readyState === 4) {
                reject('Could not fetch data!')
            }
        })
    
        // https://jsonplaceholder.typicode.com/todos/
        request.open('GET', url)
        request.send()
    })
}

// Promise Chaining
// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
getTodos('todos/todos_lucy.json').then(data => {
    console.log(data)
    return getTodos('todos/todos_mario.json')
}).then(data => {
    console.log(data)
    return getTodos('todos/todos_shaun.json')
}).then(data => {
    console.log(data)
}).catch(err => console.log(err)).finally(()=>console.log('Promise done'))
