
function getTodos(url, callback) {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText)
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4) {
            // console.log('Could not fetch data!')
            callback('Could not fetch data!', undefined)
        }
    })

    // https://jsonplaceholder.typicode.com/todos/
    request.open('GET', url)
    request.send()
}

// callback nesting 
getTodos('todos/todos_lucy.json', (err, data) => {
    console.log(data)
    getTodos('todos/todos_mario.json', (err, data) => {
        console.log(data)
        getTodos('todos/todos_shaun.json', (err, data) => {
            console.log(data)
        })
    })    
})

